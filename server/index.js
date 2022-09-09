import express from 'express'
import fileupload from 'express-fileupload'
import cors from 'cors'

import uploadRoutes from './route/UploadRoutes.js'
import downloadRoutes from './route/DownloadRoutes.js'
import metadataRoutes from './route/MetadataRoutes.js'

const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileupload())
app.use(cors({ origin: '*' }))

app.use('/upload', uploadRoutes)
app.use('/download', downloadRoutes)
app.use('/metadata', metadataRoutes)

app.use((error, req, res, next) => {
  const statusCode = error.httpStatusCode || 500
  res.status(statusCode).send({ message: error.message, status: 'error' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))