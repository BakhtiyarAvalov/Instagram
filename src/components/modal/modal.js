'use client'
import CreatePost from "../createPost/createPost"

export default function Modal({active, setActive, children}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <CreatePost/>
            </div>
        </div>
    )
}