import MAX_FILE_SIZE from '../../constant/MaximumFileSizeLimit.js'
import AllowedFileExtensions from '../../constant/AllowedFileExtensions.js'

const validateRequest = (req, res ,next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    const error = new Error()
    error.httpStatusCode = 400
    error.message = 'Could not find any file to upload.'
    throw error
  } else {
    next()
  }
}

const validateFileExtension = (req, res, next) => {
  const { file } = req.files
  if (AllowedFileExtensions.includes(file.mimetype)) {
    next()
  } else {
    const error = new Error()
    error.httpStatusCode = 400
    error.message = `${file.mimetype} file type is not allowed.`
    throw error
  }
}

const validateFileSize = (req, res, next) => {
  const { file } = req.files
  if (MAX_FILE_SIZE >= file.size) {
    next()
  } else {
    const error = new Error()
    error.httpStatusCode = 400
    error.message = `Size limit is exceeded for file with size: ${file.size}. Limit is: ${MAX_FILE_SIZE}`
    throw error
  }
}

export { validateRequest, validateFileExtension, validateFileSize }
