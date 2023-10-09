'use client'
import EditPost from "../editPost/editPost";
import { END_POINT } from "@/config/end-point";

export default function ModalLike ({onClick, posts}) {
 const close = ()=>{onClick(false)}
    return (
        <div className=" ModalLikeBackground">
            <span className="close-button" style={{zIndex: "20"}} onClick={close}>Х</span>
            <div className="modal-overlay">
                <div className="moda-lLike-content">
                    <div className="moda-lLike-content-label">
                        Отметки "Нравится"
                    </div>
                    {posts.map((item, index) => (
                        <div  className="flex flex-jc-sb flex-ai-c mtb4" >
                        <img id="imgAvatar" alt='' key={index} src={`${END_POINT}${item.image}`}/>
                            <div>
                                <p>{item.User.username}</p>
                                <p>{item.User.full_name }</p>
                            </div>
                            <button className="button_none_bordered">Follow</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}