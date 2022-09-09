const downloadFile = (req, res, next) => {
    const fileName = req.query.fileName
    const file = `./uploadedFiles/${fileName}`
    res.download(file)
  }
  
  export default downloadFile