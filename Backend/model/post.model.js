const mongoose = require('mongoose');

const postSchema=mongoose.Schema({
    Email : String ,
    Name :String,
    Number : String,
    
})

const PostModel=mongoose.model("post",postSchema);
module.exports=PostModel;