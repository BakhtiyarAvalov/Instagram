'use client'
import CreatePost from "../createPost/createPost"

export default function Modal({active, setActive, setCreatePostShear, fileData, handleFileChange, selectedFile}) {
    return (
        <div className= "modal active" onClick={() => setActive(false)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <CreatePost setCreatePostShear={setCreatePostShear} handleFileChange={handleFileChange} fileData={fileData} selectedFile={selectedFile}/>
            </div>
        </div>
    )
}