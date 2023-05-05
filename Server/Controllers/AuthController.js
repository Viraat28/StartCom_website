import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserRepository from "../DDD/UserRepository.js";

import client from '../utils/redis.js'


const userRepo=new UserRepository();
export const registerUser=async(req,res)=>{
    // const {username,password,firstname,lastname}=req.body
    // const salt=await bcrypt.genSalt(10)
    // const hashedPass=await bcrypt.hash(req.body.password,salt)
    // req.body.password=hashedPass
    // const newUser=new UserModel({username,password:hashedPass,firstname,lastname})
    // const newUser=new UserModel(req.body)
    const {username}=req.body
    

    try {
        // const oldUser=await UserModel.findOne({username})

        const oldUser =await userRepo.finduser(username);
        // 
        // res.status(200).json(newUser)
        if(oldUser){
            return res.status(400).json({message:"Username already registered"})
        }
        const user=await userRepo.createuser(req.body)
        console.log(user)
        const token=jwt.sign({username:user.username,id:user._id},'MERN',{expiresIn:"1h"})
        
        client.del("users");
        let users = await UserModel.find();
        users = users.map((user) => {
          const { password, ...otherDetails } = user._doc;
          return otherDetails;
        });
        await client.set("users", JSON.stringify(obj));

        res.status(200).json({user,token})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//User Login

export const loginUser=async(req,res)=>{
    const {username,password}=req.body
    try {
        const user=await userRepo.finduser(username);
        if(user){
            const validity=await bcrypt.compare(password,user.password)
            if(!validity){
                res.status(400).json("Wrong Password")
            }
            else{
                const token=jwt.sign({username:user.username,id:user._id},'MERN',{expiresIn:"1h"})
                res.status(200).json({user,token})
            }
            // validity?res.status(200).json(user):res.status(400).json("Wrong password")
        }
        else{
            res.status(404).json("user doesnot exist")
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}