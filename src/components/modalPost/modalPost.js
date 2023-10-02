import like from "../../../public/images/svg/like.svg"
import commentimg from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import rightArrow from "../../../public/images/svg/rightArrow.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"
import { END_POINT } from "@/config/end-point"
import ava from "../../../public/images/svg/Ava.svg"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPostsById } from "@/app/store/slices/postSlice"

export default function ModalPost({goToPreviousPost, goToNextPost, comments, removeComment, allComments, save, onChangeComment, comment, removeComents, addComment, setModalPostActive, currentPost}) {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.post)
    const didMount = () => {
        dispatch(getPostsById(id))
    }
    // console.log("modal", post);

    useEffect(didMount, [])
    return (
        <div>
            <div className= "modal active ModalPost" onClick={() => setModalPostActive(false)}>
                <p id="close">X</p>
            </div>
            <Image alt="" onClick={goToPreviousPost} className="arrow" id="leftArrowPost" src={leftArrow}/>
            <div className="ModalPost_content active">
                <div  className="Modal_post_left_item">
                    <img src={`${END_POINT}${currentPost.image}`} alt=""/>
                </div>
                <div className="Modal_post_right_item">
                    <div className="newsFeed_post mtb4">
                        <div className="flex">
                            <Image alt="" className="m2" src={ava}/>
                            <div className=" flex flex-cl flex-ai-s">
                                <h3>Name</h3>
                                <h4>Местоположение</h4>
                            </div>
                        </div>
                        <p>...</p>
                    </div>
                    <div style={{ height: '35%', width:'100%', overflowY: 'scroll' }}>
                    {allComments.map((comment, index) => (
                        <div className="newsFeed_post mtb4">
                            <div className="flex">
                                <Image alt="" className="m2" src={ava}/>
                                <div  className=" flex flex-cl flex-ai-s">
                                    <h3 key ={index}>User</h3>
                                    <h4  style={{width:'100%'}}>{comment}</h4>
                                </div>
                                <button onClick={() => removeComment(index)}  className="button-no-border button-delete">x</button>
                            </div>
                        </div>
                     ))}
                     </div>
                    <div className="modalPost-footer">
                        <div className="flex flex-jc-sb p2">
                            <button className="button-no-border">View insights</button>
                            <button className="button-border">Currently boosted</button>
                        </div>
                        <div className="flex modal_post_icon newsFeed_post_icon">
                            <p>
                                <Image alt="" src={like}/>
                                <Image alt="" src={commentimg}/>
                            </p>
                            <p>
                                <Image alt="" src={checkbox}/>
                            </p>
                        </div>
                        <p>like by name</p>
                        <fieldset className={"fieldset"}>
                            <Image alt="" src={emoji}/>
                            <textarea value={comments} onChange={onChangeComment} className="textarea" placeholder= "Add a comment"></textarea>
                            <button className="button_none_bordered" onClick={save}>Post</button>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Image alt="" onClick={goToNextPost} className="arrow" id="rightArrowPost" src={rightArrow}/>
        </div>  
    )
}