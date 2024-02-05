import { Express } from "express";

const router = Express.router();

import authController from '../controller/authController.js';

router.post("/login", authController.login);

export default router;