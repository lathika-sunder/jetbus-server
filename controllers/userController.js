const express=require('express')

const getUsers=(request,response)=>{
    try {
        response.status(200).json("User will be shown soon..")
    } catch (error) {
        console.log("Error getting Users",error)
    }
}


module.exports={ getUsers,signupUser,loginUser,logoutUser,signupUser,editUserDetails,getUserDetails } 