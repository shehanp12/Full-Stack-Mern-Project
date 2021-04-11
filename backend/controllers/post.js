import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    }catch (e) {

        res.status(400).json({message:e});

    }


}

export const createPost = (req,res) => {
    res.send('Post Creation');
}
