import express from 'express';
import { uploadImage } from '../controller/image-controller.js';
import upload from '../Middlewares/upload.js';
import { downloadFile } from '../controller/image-controller.js';
const router =  express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadFile);

export default router;