import express from 'express';

const router = express.Router();

// @route         GET api/auth
// @description   Test route
// @access        Public

router.get('/', (req, res) => res.send('Test auth route'));

export default router;
