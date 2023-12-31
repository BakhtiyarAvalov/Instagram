'use client'
import { useDispatch } from "react-redux"
import { END_POINT } from "@/config/end-point"
import { editPost } from "@/app/store/slices/postSlice"
import { getMyPosts } from "@/app/store/slices/postSlice"
import emoji from "../../../public/images/svg/emoji.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"
import { useState } from "react"

import Image from "next/image"

export default function EditPost({close, back, currentPost}) {
    const dispatch = useDispatch()
    const id = currentPost.id

    const backModalPost = ()=>{
        back(true) 
        close(false)
    }

    // console.log("test", currentPost);
    const [description, setDescription] = useState(currentPost.description);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileData, setFileData] = useState(`${END_POINT}${currentPost.image}`);
    
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
      }
    }

    const editFile = (e)=>{
        handleFileChange(e)
    }

    const handleSave = ()=> {
        const formData = new FormData();
        formData.append('image', selectedFile); 
        formData.append('id', id); 
        formData.append('description', description)
        dispatch(editPost(formData))
        setDescription('')
        setSelectedFile(null)
        close(false)
    }

    const handleTextChange = (e) => {    
      const newText = e.target.value;
      if (newText.length < 2200) {
        setDescription(newText);
      }
    }
    // console.log("test", fileData);
    return (
        <div className= "modal active" onClick={() => close(false)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <div className="">
                    <div className=" Create_post flex flex-ai-c flex-jc-sb Create_post_title">
                        <Image onClick ={backModalPost} src={leftArrow} alt=""/>
                        <p>Create new post</p>
                        <button type="button" className="button-no-border" onClick={handleSave}>Shear</button>
                    </div>
                    <div className="flex flex-jc-sb width1">
                        <div id="editFile" className="shear-item-left image">
                            {currentPost && <img  alt="" close="image" src={fileData}/>}
                            <label className="editFile"  htmlFor="upload-file">Изменить картинку</label>
                            <input type="file" onChange={editFile}   id="upload-file" hidden="hidden"/>
                            {selectedFile && <p>Выбран файл: {selectedFile.name}</p>}
                        </div>
                        <div  className="flex flex-cl flex-ai-c shear-item-right">
                            <p>Decode</p>
                            <textarea rows="7" placeholder="Write a caption" cols="20" value={description} onChange={handleTextChange}/> 
                            <div className=" Create_post flex flex-ai-c flex-jc-sb width1">
                                <Image alt="" src={emoji}/>
                                <p>{description.length} / 2200 </p>
                            </div>
                            <div className="profile-card-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}