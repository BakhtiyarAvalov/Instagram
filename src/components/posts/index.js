"use client"

import Post from "./post"



export default function Posts({posts, onClick}){
    const showPosts = posts.map ((item, index) =>(<Post onClick={onClick} key={index} item={item}/>))

    return <div className="posts">
        {showPosts}
    </div>
}