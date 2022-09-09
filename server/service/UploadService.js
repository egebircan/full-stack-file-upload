import fs from "fs"

import METADATA_DELIMETER from "../constant/MetadataDelimeter.js"

const uploadFile = (req, res, next) => {
    const { file } = req.files
    const uploadPath = `./uploadedFiles/${file.name}`

    file.mv(uploadPath, err => {
        if (err) {
          const error = new Error()
          error.httpStatusCode = 500
          error.message = 'Something bad happened during upload.'
          throw error
        }
        saveFileMetadata(file)
        res.status(201).send({ message: 'File uploaded.' })
    })
  }

  const saveFileMetadata = file => {
    const fileMetadata = `${file.name}${METADATA_DELIMETER}${file.size}${METADATA_DELIMETER}${Date(Date.now())}\n`
    fs.appendFile('./uploadedFiles/metadata', fileMetadata, err => {
        if (err) {
            const error = new Error()
            error.httpStatusCode = 500
            error.message = 'Something bad happened during saving file metadata.'
            throw error
        }
    })
  }
  
  export default uploadFile