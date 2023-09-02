'use client'
import gallery from "../../../public/images/svg/gallery.svg"

import Image from "next/image"


export default function ShareStories() {

    return (
        <div className="Create_post">
            <div className="flex flex-ai-c flex-cl Create_post_title">Create new post</div>
            <div className="profile-card-line"></div>
            <div  className="flex flex-cl Create_post_content">
                <Image src={gallery}/>
                <p>Drag and drop only photos</p>
                <label id="upload_btn" className="button" htmlFor="upload-file">Select from computer</label>
                <input type="file" id="upload-file" hidden="hidden"/>
                <span id="upload-text">Файл не загружен</span>
                <button className="button ShareStories-button">Share Stories</button>
            </div>
        </div>
    )
}