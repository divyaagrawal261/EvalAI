import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    password:{
        type:String,
        required:[true, "Please enter a password"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:[true, "Email already taken"]
    },
    firstName:{
        type:String,
        required:[true, "Please enter your first name"]
    },
    lastName:{
        type:String,
        required:[true, "Please enter your first name"]
    }
})

export const User=new mongoose.model("User", userSchema);