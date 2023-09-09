'use client'
import CreatePost from "../createPost/createPost"

export default function Modal({active, setActive, setCreatePostShear}) {
    return (
        <div className= "modal active" onClick={() => setActive(false)}>
            <p id="close">X</p>
            <div className="modal_content active" onClick={e => e.stopPropagation()}>
                <CreatePost setCreatePostShear={setCreatePostShear}/>
            </div>
        </div>
    )
}