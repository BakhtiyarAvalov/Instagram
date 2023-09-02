'use client'
import CreatePost from "../createPost/createPost"
import ShareStories from "../shareStories/shareStories"
import Shear from "../shear/shear"

export default function Modal({active, setActive}) {
    return (
        <div className= "modal active" onClick={() => setActive(tru)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <CreatePost/>
                {/* <Shear/> */}
            </div>
        </div>
    )
}