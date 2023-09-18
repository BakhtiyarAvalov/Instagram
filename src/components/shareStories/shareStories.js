'use client'
import gallery from "../../../public/images/svg/gallery.svg"
import Shear from "../shear/shear"
import Image from "next/image"
import { useState } from "react"

export default function ShareStories({setAddStories}) {
    const [createPostShear, setCreatePostShear] = useState(false)
   
    const setCreatePostShearActive = ()=>{
      setAddStories(false)
      setCreatePostShear(true)

    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file); 
      setFileData(null); 
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFileData(e.target.result);
        };
        reader.readAsDataURL(file);
        setCreatePostShearActive()
      }
    }


    const [text, setText] = useState('');
    const handleTextChange = (e) => {
    
      const newText = e.target.value;
      if (newText.length < 2200) {
        setText(newText);
      }
    }

      const back =() =>{
        setCreatePostShear(false)
        setAddStories(true)
      }

    return (
        <div className="Create_post">
            <div className= "modal active ModalPost" onClick={() => setAddStories(false)}>
            <p id="close">X</p>
            </div>
            <div className="ShareStories_content">
                <div className="flex flex-ai-c flex-cl Create_post_title" >Create new post</div>
                <div  className="flex flex-cl Create_post_content">
                    <Image alt="" src={gallery}/>
                    <p>Drag and drop only photos</p>
                    <label id="upload_btn" className="button"  htmlFor="upload-file">Select from computer</label>
                    <input type="file" onChange={handleFileChange}   id="upload-file" hidden="hidden"/>
                    {selectedFile && <p>Выбран файл: {selectedFile.name}</p>}
                    <button className="button ShareStories-button">Share Stories</button>
                </div>
            </div>
            {createPostShear && <Shear  back={back} handleTextChange={handleTextChange}  close={setCreatePostShear} fileData={fileData} text={text}/>}
        </div>
    )
}