import { addPost, getPosts } from "../controllers/PostControllers.js";
import express from 'express';

const router = express.Router();

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);

export default router;