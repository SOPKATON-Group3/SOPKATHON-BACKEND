import { Router } from 'express';
import ModifyController from "../controllers/ModifyController";
//router index file
import AddLetterController from "../controllers/AddLetterController";


const router = Router();
router.post('/api/v1/add', AddLetterController.postAddLetter);
router.get('/api/v1/total-letter', AddLetterController.getTotalLetter);

router.post('/api/v1/modify', ModifyController.openLetterController)
export default router;