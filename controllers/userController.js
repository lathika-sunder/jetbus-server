const express = require('express')
const User = require('../models/userModel')
const generateToken = require('../utils/generateAccessToken')
const hashPassword = require('../utils/hashPassword')
const validatePassword = require('../utils/validatePassword')
const BlackList = require('../models/blackListModel')



const getUsers = async(request, response) => {
    const users=await User.find()
    try {
        response.status(200).json(users)
    } catch (error) {
        console.log("Error getting Users", error)
    }
}

const signupUser = async (request, response) => {
    const {
        userName, gender, email, phone, password
    } = request.body;

    // Validate request body
    if (!userName || !gender || !email || !phone || !password) {
        return response.status(400).json({ message: "All fields are required" });
    }


    const hashedPassword = await hashPassword(password)

    const user = {
        userName, gender, email, phone, password: hashedPassword
    }
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return response.status(409).json({ message: "User already existing" })
        }

        await User.create(user)
        response.status(200).json("Sign Up Successful")
    } catch (error) {
        if (error.code === 'ECONNRESET') {
            response.status(503).json({ message: "Service Unavailable. Please try again later." });
        } else {
            response.status(500).json({ message: "Internal Server Error", error: error });
        }

    }

}

const loginUser = async (request, response) => {
    const { email, password } = request.body

    try {
        const userToBeLogged = await User.findOne({ email })

        if (!userToBeLogged) {
            return response.status(401).json({ message: "User not found" })
        }
        const isValidPassword = await validatePassword(password, userToBeLogged.password)

        if (!isValidPassword) {
            return response.status(404).json({ message: "Login Failed, Invalid Password" })
        }


        //cookie generation

        const token = generateToken(userToBeLogged._id, email)

        const options = {
            maxAge: 20 * 60 * 1000,
            httpOnly: true,
            sameSite: 'None'
        }
        response.cookie('SessionID', token, options)

        response.status(201).json({ message: "Login Successful", token: token })

    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error })
    }

}
const logoutUser = async (request, response) => {
    try {
        const authHeader = request.headers['cookie']
        if (!authHeader) {
            //No cookie provided
            return response.status(204).json({ message: "No Cookie Provided" })

        }

        const cookie = authHeader.split('=')[1]//extract cookie value
        const token = cookie.split(';')[0]//token is the first value in a cookie

        const isBlackListed = await BlackList.findOne({ token: token })

        if (isBlackListed) {
            //No acton required already blacklisted
            return response.status(204).json({ message: "No Content" })
        }
        const newBlackList = new BlackList({ token: token })
        await newBlackList.save()

        //browser should clear the cookie header
        response.setHeader('Clear-Site-Data', '"cookies"')

        response.status(200).json({ message: "Log Out Successful" })

    } catch (error) {
        response.status(500).json({ message: "Iternal Server Error", error: error })
    }
}

const editUserDetails = async(request, response) => {
    const id=request.user._id
    try {
        const user=await User.findById(id)
        if (request.body.userName) {
            user.userName = request.body.userName;
        }
        if (request.body.gender) {
            user.gender = request.body.gender;
        }
        if (request.body.email) {
            user.email = request.body.email;
        }
        if (request.body.phone) {
            user.phone = request.body.phone;
        }

        await user.save()
        response.status(200).json({message:"Edit Details Successful",user:user})
    } catch (error) {
        response.status(500).json({message:"Internal Server Error",error:error.message})
    }

}
const getUserDetails = async(request, response) => {
    const id=request.user._id
   
    try {
       const user=await User.findById(id) 
       return response.status(200).json({message:"Get USer Details Successful", user:user})
    } catch (error) {
        response.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

module.exports = { getUsers, signupUser, loginUser, logoutUser, editUserDetails, getUserDetails } 