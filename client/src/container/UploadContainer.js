import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

import { config } from "../config"

const UploadContainer = () => {
    const [file, setFile] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();

    const uploadFile = async () => {
        const formData = new FormData()
        formData.append("file", file, file.name ) 
        const response = await fetch(config.url.UPLOAD_FILE, {
            method: "POST",
            body: formData
          })
        
        if (response.status === 201) {
            setFile(null)
            navigate("/")
        } else if (response.status === 400) {
            setFile(null)
            const responseJson = await response.json()
            setErrorMessage(responseJson.message)
        }    
    }

    return (
    <div
        style={{
            width: "40%",
            margin: "auto"
        }}
    >
        <Form.Control
                type="file"
                id="inputGroupFile01"
                onChange={e => {
                    setFile(e.target.files[0])
                    setErrorMessage(null)
                }}
        />
        { file && 
            <div style={{ marginTop: "25px" }}>
                <Button onClick={uploadFile}>
                    Upload
                </Button>
            </div>
        }
        { errorMessage && <div style={{ marginTop: "25px", color: "red" }}>{errorMessage}</div> }
    </div>
)}

export default UploadContainer