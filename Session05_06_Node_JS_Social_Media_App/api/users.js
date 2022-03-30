import express from 'express';
import { check, validationResult } from 'express-validator';
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/User.js';
import { response } from 'express';

const router = express.Router();

// @route         GET api/users
// @description   Test route
// @access        Public

router.get('/', (req, res) => res.send('Test users route'));

// @route         GET api/users
// @description   Test route
// @access        Public

router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please use a valid email').isEmail(),
		check(
			'password',
			'The password must contain at least 4 character'
		).isLength({ min: 4 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			// res.send('Successful registration!');
			const { name, email, password } = req.body;

			try {
				// check if user exists
				let user = await User.findOne({ email: email });
				console.log('User exist', user);

				if (user) {
					return res
						.status(400)
						.json({ errors: [{ msg: 'User already exists' }] });
				}

				//get gravatar
				const avatar = gravatar.url(email, {
					s: '200',
					r: 'pg',
					d: 'mm',
				});

				user = new User({
					name: name,
					email: email,
					password: password,
					avatar: avatar,
				});

				// encrypt/hash the password
				const salt = await bcryptjs.genSalt(10);
				user.password = await bcryptjs.hash(password, salt);

				await user.save();

				//json web token
				const payload = {
					user: {
						id: user.id,
					},
				};

				jsonwebtoken.sign(
					payload,
					process.env.jwtSecret,
					{ expiresIn: 360000 },
					(err, token) => {
						if (err) throw err;
						console.log('token = ', token);
						return res.json({ token: token });
					}
				);
			} catch (error) {
				res.status(500).send('Server error!!');
			}
		}
	}
);

export default router;
