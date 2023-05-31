import { Router } from 'express'

import {
    getUser,
    deleteUser,
    updateUser,
    loginUser,
} from '../controllers/user.controller'
import { createPostDto } from '../validators/user.validator'
import * as postController from '../controllers/user.controller'
import { validate } from '../utils/validate'
import { authenticateToken } from '../middleware/authentication.middleware'
import { isAdmin } from '../middleware/authentication.middleware'
const router = Router()

router.get('/', getUser)

router.post('/', validate(createPostDto), postController.createUser)

router.delete('/:id', authenticateToken, deleteUser)
router.patch(
    '/:id',
    authenticateToken,
    validate(createPostDto),
    postController.updateUser
)

// router.post('/signup')
router.post('/login', authenticateToken, loginUser)
// router.get('/login', loginUser)

export default router
