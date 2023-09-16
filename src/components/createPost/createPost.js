export default function CreatePost ({handleFileChange, selectedFile}) {
    
  
    return (
    <div className="Create_post">
        <div id="Create_post_button"  className="flex flex-ai-c flex-cl Create_post_title">
            Create new post
        </div>
        <div  className="flex flex-cl Create_post_content">
            <p>Drag photos and videos hear</p>
            <label id="upload_btn" className="button"  htmlFor="upload-file">Select from computer</label>
            <input type="file" onChange={handleFileChange}   id="upload-file" hidden="hidden"/>
            {selectedFile && <p>Выбран файл: {selectedFile.name}</p>}
        </div>
        <div>
      </div>
    </div>
    )
}

