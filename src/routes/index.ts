//router index file
import { Router }          from 'express';
import AddLetterController from "../controllers/AddLetterController";


const router = Router();
router.post('/api/v1/add', AddLetterController.postAddLetter);



export default router;