import React, { useState, useEffect } from "react"

import { config } from "../config"
import FileTable from "../component/fileTable"

const FilesContainer = () => {
    const [files, setFiles] = useState([])

    const fetchFiles = async () => {
        const response = await fetch(config.url.FETCH_FILES)
        const responseJson = await response.json()
        setFiles(responseJson.metadataList)
      }
    
      useEffect(() => {
        fetchFiles()
      }, [])

    return (
        <div
            style={{
                width: "80%",
                margin: "auto",
                overflow: "auto",
                maxHeight: "500px",
            }}
        >
            <FileTable files={files} />
        </div>
    )
}

export default FilesContainer