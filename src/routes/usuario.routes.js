import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/usuario.controller'

router.get('/', userCtr.readAllUsers);
router.post('/create', userCtr.createUser);

export default router;