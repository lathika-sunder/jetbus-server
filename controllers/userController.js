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
        name, email, phone, password, role
    } = request.body;
    const hashedPassword = hashPassword(password)
    const user = {
        name, email, phone, hashedPassword, role
    }
    try {
        await User.create(user)
        response.status(200).json("Sign Up Successful")
    } catch (error) {
        console.log("Error Signing Up User", error)
    }

}

const loginUser = async (request, response) => {
    const { email, password } = request.body
    const user = { email, password }

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
const logoutUser = (request, response) => {

}

const editUserDetails = (request, response) => {

}
const getUserDetails = (request, response) => {

}

module.exports = { getUsers, signupUser, loginUser, logoutUser, editUserDetails, getUserDetails } 