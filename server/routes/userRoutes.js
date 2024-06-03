// routes/user.js
import express from 'express';
import { check } from 'express-validator';
import { createUser } from '../controllers/userControllers.js';

const router = express.Router();

router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 8 or more characters').isLength({ min: 8 }),
    check('firstName', 'First name is required'),
    check('lastName', 'Last name is required')
  ],
  createUser
);

export default router;
