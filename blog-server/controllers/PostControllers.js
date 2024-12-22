import Post from "../models/Post.js";


const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: "Error creating post" });
    }
};

const getPosts = async (req, res) => {  
    try {    
        const posts = await Post.find();    
        res.status(200).json(posts);  
    } catch (error) {
        res.status(500).json({ error: "Error fetching posts" });
    }   
};

export { addPost, getPosts };