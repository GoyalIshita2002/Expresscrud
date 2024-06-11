import { Router } from "express";
import { user } from "../postgres/connection.js";

export const GetAllUser = async(req,res) => {
   try{
      const users = await user.findAll();
      if(users.length==0){
        return res.status(404).json({message: "No user exist"})
      }
      else{
        return res.status(200).json(users)
      }
   }catch(error){
     console.log(error);
     return res.status(500).json({message: "Internal issue"})
   } 
}

export const CreateUser = async(req,res) => {
    const {Name,email,password} = req.body;
    try{
      const users = await user.findOne({where:{email: email}})
      if(users==null){
        const p = await user.create(req.body);
        console.log("user created");
        return res.status(200).json(p);
      }
      else{
        return res.status(500).json({message: " user already exist"})
      }
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal issue"})
    }
}

