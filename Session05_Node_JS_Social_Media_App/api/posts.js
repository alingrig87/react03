import express from 'express';

const router = express.Router();

// @route         GET api/posts
// @description   Test route
// @access        Public

router.get('/', (req, res) => res.send('Test posts route'));

export default router;
