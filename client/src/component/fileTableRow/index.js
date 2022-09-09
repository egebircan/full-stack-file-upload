import React from "react"
import Button from 'react-bootstrap/Button';

import { config } from "../../config"

const FileTableRow = ({ file, index }) => {

    const downloadFile = async () => {
        window.open(`${config.url.DOWNLOAD_FILE}?fileName=${file.fileName}`);
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{file.fileName}</td>
            <td>{file.fileSize}</td>
            <td>{file.uploadDate}</td>
            <td>
                <Button variant="success" onClick={downloadFile}>
                    Download
                </Button>
            </td>
        </tr>
    )
}

export default FileTableRow