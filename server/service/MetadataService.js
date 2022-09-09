import fs from 'fs'

import METADATA_DELIMETER from '../constant/MetadataDelimeter.js'

const fetchMetadata = (req, res, next) => {
    fs.readFile('./uploadedFiles/metadata', 'utf8', (_, data) => {
        const metadataList = structureMetadataList(data)
        res.status(200).send({ metadataList })
      });
  }

  const structureMetadataList = data => {
    return data
        .split(/\r?\n/) // split by new line
        .filter(metadata => !!metadata) // remove empty new lines
        .map(metadata => {
            const metadataInfo = metadata.split(METADATA_DELIMETER)
            return {
                fileName: metadataInfo[0],
                fileSize: metadataInfo[1],
                uploadDate: metadataInfo[2]
            }
        })
  }
  
  export default fetchMetadata