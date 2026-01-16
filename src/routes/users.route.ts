import  { Router } from 'express';
import usersController from '../controllers/users.controller';
import userValidator from '../middlewares/userValidator';
const router = Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.post('/', userValidator.validateCreateUserRequest, usersController.createUser);

export default router;