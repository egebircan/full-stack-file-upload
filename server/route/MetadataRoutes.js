import express from 'express'

import fetchMetadata from '../service/MetadataService.js'

const router = express.Router()

router.get('/', fetchMetadata)

export default router