import express from 'express'

import uploadFile from '../service/UploadService.js'
import { validateRequest, validateFileSize, validateFileExtension } from '../middleware/validation/UploadValidations.js'

const router = express.Router()

router.post('/', validateRequest, validateFileExtension, validateFileSize, uploadFile)

export default router
