import express from 'express';
import { TestingMethod } from '../controllers/EmailController.js';

const router = express.Router();

router.get('/',TestingMethod);

export default router;