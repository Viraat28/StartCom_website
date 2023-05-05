import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from "mongoose";
import PostRepository from "../DDD/PostRepository.js";

const Postrepo=new PostRepository();
//create post
export const CreatePost=async(req,res)=>{
    const newPost=await Postrepo.create_chat(req.body)
    // console.log(newPost)
    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }

}

//get post

export const GetPost=async(req,res)=>{
    const id=req.params.id

    try {
        const post=await Postrepo.get_post(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }

}

//update post


//delete Post

export const DeletePost=async(req,res)=>{
    const id=req.params.id;
    const userId=req.body.userId;

    try {
        const post=await Postrepo.get_post(id);
        if(post.userId===userId){
            await post.deleteOne();
            res.status(200).json("Post Deleted ")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//like or dislike post

export const likePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body;
    try {
        const post=await Postrepo.get_post(id);
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}})
            res.status(200).json("Post Liked")
        }
        else{
            await post.updateOne({$pull:{likes:userId}})
            res.status(200).json("Post unLiked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get timelinePosts

export const getTimeLinePosts=async(req,res)=>{
    const userId=req.params.id;
    try {
        const currentUserPosts=await PostModel.find({userId:userId})
        // const followingPosts=await UserModel.aggregate([
        //     {
        //         $match:{
        //             _id:new mongoose.Types.ObjectId(userId)
        //         }
        //     },{
        //         $lookup:{
        //             from:"posts",
        //             localField:"following",
        //             foreignField:"userId",
        //             as:"followingPosts"
        //         }
        //     },{
        //         $project:{
        //             followingPosts:1,
        //             _id:0
        //         }
        //     }
        // ])
        const followingPosts=await Postrepo.timeline_posts(userId)
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a,b)=>{
            return b.createdAt-a.createdAt;
        }))
    } catch (error) {
        res.status(500).json(error)
    }
}