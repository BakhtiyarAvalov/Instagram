'use client'
import gallery from "../../../public/images/svg/gallery.svg"

import Image from "next/image"
export default function CreatePost () {
    return (
        <div className="Create_post">
            <div className="flex flex-ai-c flex-cl Create_post_title">Create new post</div>
            <div className="profile-card-line"></div>
            <div  className="flex flex-cl Create_post_content">
                <Image src={gallery}/>
                <p>Drag photos and videos hear</p>
                <button className="button">Select from computer</button>
            </div>
        </div>
    )
}