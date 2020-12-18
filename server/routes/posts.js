import express from 'express';
import {getPosts, createPosts, updatePost, deletePost, likePost} from '../controller/posts.js'

const router = express.Router();

// GET > show data to users
// POST > insert data
// PUT > update data
// DELETE > delete data

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;