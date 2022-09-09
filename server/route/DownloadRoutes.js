import express from 'express'

import downloadFile from '../service/DownloadService.js'

const router = express.Router()

router.get('/', downloadFile)

export default router