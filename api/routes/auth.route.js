import express from 'express';
import {signin, signup} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/SignUp',signup);
router.post('/Signin',signin);


export default router;
