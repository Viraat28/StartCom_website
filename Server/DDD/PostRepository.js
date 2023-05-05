import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from "mongoose";

class PostRepository{
    async create_chat(data){
        const newPost=new PostModel(data)
        return newPost;
    }
    async get_post(data){
        const post=await PostModel.findById(data)
        return post;
    }
    async timeline_posts(data){
        const following_posts=await UserModel.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(data)
                }
            },{
                $lookup:{
                    from:"posts",
                    localField:"following",
                    foreignField:"userId",
                    as:"followingPosts"
                }
            },{
                $project:{
                    followingPosts:1,
                    _id:0
                }
            }
        ])
        return following_posts;
    }
}

export default PostRepository;