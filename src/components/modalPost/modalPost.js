import like from "../../../public/images/svg/like.svg"
import comment from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import rightArrow from "../../../public/images/svg/rightArrow.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"

import ava from "../../../public/images/svg/Ava.svg"
import post from "../../../public/images/post2.png"
import Image from "next/image"

export default function ModalPost({setModalPostActive, currentPost}) {

    return (
        <div>
            <div className= "modal active ModalPost" onClick={() => setModalPostActive(false)}>
                <p id="close">X</p>
                <Image className="arrow" id="leftArrowPost" src={leftArrow}/>
            </div>
            <div className="ModalPost_content active">
                <div  className="Modal_post_left_item">
                     <Image src={currentPost}/>
                </div>
                <div className="Modal_post_right_item">
                    <div className="newsFeed_post mtb4">
                        <div className="flex">
                            <Image className="m2" src={ava}/>
                            <div className=" flex flex-cl flex-ai-s">
                                <h3>Name</h3>
                                <h4>Местоположение</h4>
                            </div>
                        </div>
                        <p>...</p>
                    </div>
                    <div className="newsFeed_post mtb4">
                        <div className="flex">
                            <Image className="m2" src={ava}/>
                            <div className=" flex flex-cl flex-ai-s">
                                <h2>Name</h2>
                                <h4>Комментарий</h4>
                            </div>
                        </div>
                    </div>
                    <div className="modalPost-footer">
                        <div className="flex flex-jc-sb p2">
                            <button className="button-no-border">View insights</button>
                            <button className="button-border">Currently boosted</button>
                        </div>
                        <div className="flex modal_post_icon newsFeed_post_icon">
                            <p>
                                <Image src={like}/>
                                <Image src={comment}/>
                            </p>
                            <p>
                                <Image src={checkbox}/>
                            </p>
                        </div>
                        <p>like by name</p>
                        <fieldset className={"fieldset"}>
                            <Image src={emoji}/>
                            <textarea className="textarea" placeholder= "Add a comment"></textarea>
                            <button className="button_none_bordered" onClick={() => setModalPostActive(false)}>Post</button>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Image className="arrow" id="rightArrowPost" src={rightArrow}/>
        </div>  
    )
}