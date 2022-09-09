const BASE_URL = 'http://localhost:8080'

const dev = {
  url: {
    FETCH_FILES: `${BASE_URL}/metadata`,
    UPLOAD_FILE: `${BASE_URL}/upload`,
    DOWNLOAD_FILE: `${BASE_URL}/download`
  }
}

export const config = dev