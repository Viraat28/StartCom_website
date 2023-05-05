import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    username:String,
    desc:String,
    likes:[],
    image:String,
    comments:[],

},
{
    timestamps:true,
})

var PostModel=mongoose.model("Posts",postSchema)
export default PostModel;