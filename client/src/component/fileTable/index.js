import React from "react"
import Table from 'react-bootstrap/Table'

import FileTableRow from "../fileTableRow"

const FileTable = ({ files }) => {

    const renderFileTable = () => {
        return files.map((file, index) => <FileTableRow file={file} index={index + 1} key={file.uploadDate} />)
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>File Name</th>
                <th>File Size (bytes)</th>
                <th>Upload Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {renderFileTable()}
            </tbody>
        </Table>
    )
}

export default FileTable