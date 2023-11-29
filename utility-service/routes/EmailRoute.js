import express from 'express';
import { sendBulkEmail } from '../controllers/EmailController.js';

const router = express.Router();

router.post('/bulk',sendBulkEmail);

export default router;