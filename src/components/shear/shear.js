'use client'
import gallery from "../../../public/images/svg/gallery.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"

import Image from "next/image"


export default function Shear({close}) {

    return (
        <div className= "modal active" onClick={() => close(false)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <div className="Create_post">
                <div className="flex flex-ai-c flex-jc-sb Create_post_title">
                    <Image src={leftArrow}/>
                    <p>Create new post</p>
                    <p>Shear</p>
                </div>
                    <div className="flex flex-jc-sb width1">
                        <div className="shear-item-left">
                            <Image src={gallery}/>
                        </div>
                        <div  className="flex flex-cl flex-ai-c shear-item-right">
                            <p>Decode</p>
                            <input type="text"/>
                            <input type="file" id="upload-file" hidden="hidden"/>
                            <div></div>
                            <div className="flex flex-ai-c flex-jc-sb width1">
                                <Image src={gallery}/>
                                <p>0/2 200</p>
                            </div>
                            <input className="input"></input>
                            <div className="profile-card-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}