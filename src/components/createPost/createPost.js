'use client'
import gallery from "../../../public/images/svg/gallery.svg"

import Image from "next/image"


export default function CreatePost ({setCreatePostShear}) {

    return (
        <div className="Create_post">
            <div id="Create_post_button"  className="flex flex-ai-c flex-cl Create_post_title">
                Create new post
                <button id="Create_post_button" className="button-no-border" onClick={setCreatePostShear}>Сontinue</button>   
            </div>
            <div className="profile-card-line"></div>
            <div  className="flex flex-cl Create_post_content">
                <Image src={gallery}/>
                <p>Drag photos and videos hear</p>
                <label id="upload_btn" className="button" htmlFor="upload-file">Select from computer</label>
                <input type="file" id="upload-file" hidden="hidden"/>
            </div>
        </div>
    )
}