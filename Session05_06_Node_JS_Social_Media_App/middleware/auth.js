import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

const auth = (req, res, next) => {
	//get token from header
	const token = req.header('x-auth-token');
	console.log(token);

	if (!token) {
		return res
			.status(401)
			.json({ msg: 'You are not authorized to access this resource!' });
	}

	try {
		const decoded = jsonwebtoken.verify(token, process.env.jwtSecret);
		req.user = decoded.user;
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: 'Token is invalid' });
	}
};

export default auth;
