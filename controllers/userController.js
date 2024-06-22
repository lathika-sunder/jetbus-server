const express = require('express')
const User = require('../models/userModel')
const generateToken = require('../utils/generateAccessToken')
const hashPassword = require('../utils/hashPassword')
const validatePassword = require('../utils/validatePassword')


const getUsers = (request, response) => {
    try {
        response.status(200).json("User will be shown soon..")
    } catch (error) {
        console.log("Error getting Users", error)
    }
}

const signupUser = async (request, response) => {
    const {
        userName, gender,email, phone, password
    } = request.body;

    // Validate request body
    if (!userName || !gender || !email || !phone || !password) {
        return response.status(400).json({ message: "All fields are required" });
    }


    const hashedPassword =await hashPassword(password)

    const user = {
        userName, gender,email, phone, password:hashedPassword
    }
    try {
        const existingUser=await User.findOne({email})
        if(existingUser)
        {
            return response.status(409).json({message:"User already existing"})
        }

        await User.create(user)
        response.status(200).json("Sign Up Successful")
    } catch (error) {
        if (error.code === 'ECONNRESET') {
            response.status(503).json({ message: "Service Unavailable. Please try again later." });
        } else {
            response.status(500).json({ message: "Internal Server Error",error:error });
        }
    
    }

}

const loginUser = async (request, response) => {
    const { email, password } = request.body
    

    try {
        const userToBeLogged = await User.findOne(email)
        if (!userToBeLogged) {
            return response.status(401).json({ message: "User not found" })
        }
        const isValidPassword=validatePassword(password, userToBeLogged.password)
        if (!isValidPassword) {
            return response.status(404).json({ message: "Login Failed" })
        }
        //cookie generation
        const token = generateToken(id, email, userToBeLogged.role)
        const options = {
            maxAge: 20 * 60 * 1000,
            httpOnly: true,
            sameSite: 'None'
        }
        response.cookie('SessionID', token, options)

        response.status(201).json({ message: "Login Successful", token: token })

    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error })
    }

}
const logoutUser = async(request, response) => {
try {
    const authHeader=request.headers['cookie']
    if(!authHeader)
        {
            //No cookie provided
            return response.status(204).json({message:"No Cookie Provided"})

        }
        const cookie=authHeader.split('=')[1]
    
} catch (error) {
    
}
}

const editUserDetails = (request, response) => {

}
const getUserDetails = (request, response) => {

}

module.exports = { getUsers, signupUser, loginUser, logoutUser, editUserDetails, getUserDetails } 