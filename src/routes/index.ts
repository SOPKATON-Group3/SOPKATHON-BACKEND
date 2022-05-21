import { Router } from 'express';
import { body } from "express-validator/check";
import ModifyController from "../controllers/ModifyController";

const router: Router = Router();

router.post('/api/v1/modify', ModifyController.openLetterController)
export default router;