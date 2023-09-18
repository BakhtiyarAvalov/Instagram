'use client'
import emoji from "../../../public/images/svg/emoji.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"

import Image from "next/image"

export default function Shear({ close, fileData, text, handleTextChange, back}) {

    return (
        <div className= "modal active" onClick={() => close(false)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <div className="">
                    <div className=" Create_post flex flex-ai-c flex-jc-sb Create_post_title">
                        <Image onClick ={back} src={leftArrow} alt=""/>
                        <p>Create new post</p>
                        <button className="button-no-border">Shear</button>
                    </div>

                    <div className="flex flex-jc-sb width1">
                        <div className="shear-item-left image">
                            {fileData && <img alt="" close="image" src={fileData}/>}
                        </div>
                        <div  className="flex flex-cl flex-ai-c shear-item-right">
                            <p>Decode</p>
                            <textarea rows="7" placeholder="Write a caption" cols="20" value={text} onChange={handleTextChange}/>          
                            <div className=" Create_post flex flex-ai-c flex-jc-sb width1">
                                <Image alt="" src={emoji}/>
                                <p>{text.length} / 2200 </p>
                            </div>
                            <div className="profile-card-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}