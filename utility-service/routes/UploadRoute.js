import express from 'express';
import { uploadExcel, uploadResume } from '../controllers/UploadController.js';

const router = express.Router();

router.post('/excel',uploadExcel);

router.post('/resume',uploadResume);

export default router;