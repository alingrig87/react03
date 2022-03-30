import express from 'express';
import bcryptjs from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import auth from '../middleware/auth.js';

import User from '../models/User.js';
import Post from '../models/Post.js';
const router = express.Router();

// @route         GET api/posts
// @description   Test route
// @access        Public

router.get('/', (req, res) => res.send('Test posts route'));

// @route         POST api/posts
// @description   Create a new post
// @access        Private - only authenticated users can add new posts

router.post(
	'/',
	[auth, [check('text', 'Post content required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id);
			const post = new Post({
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			console.log('post = ', post);

			const newPost = await post.save();
			res.status(201).json({ post: newPost });
		} catch (error) {}
	}
);

export default router;
