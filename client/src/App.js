import {Routes, Route} from "react-router-dom";

import Header from "./component/header"
import FilesContainer from "./container/FilesContainer"
import UploadContainer from "./container/UploadContainer"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FilesContainer />}/>
        <Route path='upload' element={<UploadContainer />} />
      </Routes>
    </>
  )
}

export default App
