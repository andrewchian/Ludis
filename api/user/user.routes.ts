import express from 'express';

import {
  getUser,
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} from './user.controller';

const router = express.Router();

router.post('/', createUser);
router.get('/:userid', getUser);
router.get('/', getUsers);
router.put('/:userid', updateUser);
router.delete('/:userid', deleteUser);

export default router;
