"use client"
import { useState, useEffect, useRef} from "react"

import Header from "@/components/header/header"
import Stories from "@/components/stories/stories"
import like from "../../../public/images/svg/like.svg"
import comment from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import rightArrow from "../../../public/images/svg/rightArrow.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"
import Image from "next/image"

import post from '../../../public/images/post.png'
import post1 from '../../../public/images/post1.png'
import post2 from '../../../public/images/post2.png'
import post3 from '../../../public/images/post3.png'
import post4 from '../../../public/images/post4.png'
import post5 from '../../../public/images/post5.png'

const posts = [
    {
        show: 24,
        comments: 55,
        like: 190,
        image: post5,
        name: "user1"
    },
    {
        show: 244,
        comments: 48,
        like: 86,
        image: post3,
        name: "user2"
    },
    {
        show: 800,
        comments: 35,
        like: 150,
        image: post4,
        name: "user3"
    },   
    {
        show: 39,
        comments: 94,
        like: 290,
        image: post1,
        name: "user4"
    }
    ,   
    {
        show: 3,
        comments: 4,
        like: 20,
        image: post2,
        name:  "user5"
    },   
    {
        show: 39,
        comments: 9,
        like: 20,
        image: post,
        name: "user6"
    }
    
]


export default function NewsFid() {
    const [comments, setComments] = useState(""); 
    const [allComments, setAllComments] = useState([])
    const [expanded, setExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTimer, setIsTimer] = useState()

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        
        if(isTimer){
        clearTimeout(isTimer)
        setIsTimer(null)
        }

        let timeoutID = setTimeout(() => {
        console.log('work')
        closeModal();
        }, 5000);

        setIsTimer(timeoutID)
        // console.log("work");
    }

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
        clearTimeout(isTimer)
        setIsTimer(null)
    }
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current;
            if (container) {
              if (container.scrollWidth <= container.clientWidth) {
                setExpanded(true);
              }
            }
    }, [comment]);
        
    const toggleExpansion = () => {
        setExpanded(!expanded);
      };


    const addComment = (item) =>{
        setAllComments([...allComments, item])
        setComments("")
    }

    const onChangeComment = (e)=>{
        
        setComments(e.target.value)
    }
    
    const save = ()=>{
        if(comments.trim()===""){
            alert("Напишите комментарий")
            return;
        }
        addComment(comments)
    }
   
    const removeComment = (index) =>{
      const updatedComments = [...allComments]
      updatedComments.splice(index, 1)
      setAllComments(updatedComments)
    }


  return (
    <main  className="">
        <Header/>
        <div className=" container newsFeed">
            <div className="news_Feed_left_item">
                <div className="newsFeed_story">
                    <span className="newsFeed_story_left_item" id="arrow"><Image alt="" src={leftArrow}/></span>
                    {posts.map((post, index) => (
                        <p style={{cursor:"pointer"}} key={index} className="newsFeed_stories_play">
                            <Image onClick={openModal} src={post.image} alt={`Post ${index}`}/> 
                            {post.name}
                        </p>
                    ))}
                    <span className="newsFeed_story_right_item" id="arrow"><Image alt="" src={rightArrow}/></span>
                </div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <div className="newsFeed_post">
                            <div className="newsFeed_post_ava">
                                <Image  src={post.image} alt=""/> 
                                <p>{post.name}</p>
                            </div>
                            <p>...</p>
                        </div>
                        <div className="newsFeed_post_item">
                            <Image  src={post.image} alt={`Post ${index}`}/>
                            <div className="flex newsFeed_post_icon">
                                <p>
                                    <Image alt="" src={like}/>
                                    <Image alt="" src={comment}/>
                                </p>
                                <p>
                                    <Image alt="" src={checkbox}/>
                                </p>
                            </div>
                            <p>10K Likes</p>
                            {allComments.map((comment, index) => (
                                <div key={index} className="info-container" ref={containerRef}> 
                                    <h2>User</h2> 
                                    <p className="new-feed-comments ${expanded ? '' : 'info-content-hidden'}">
                                        <p >{comment}</p>
                                        <button onClick={() => removeComment(index)}  className="button-no-border button-delete">x</button>
                                    </p>
                                    {!expanded && (
                                        <button onClick={toggleExpansion}>{expanded ? 'Less' : 'More'}</button>
                                    )}
                                </div>
                            ))}
                            <p className="opacity">View all 100 comments</p>
                            <p className="opacity">1 hour ago</p>
                        </div>
                        <fieldset className={"fieldset"}>
                            <Image alt="" src={emoji}/>
                            <textarea value={comments} onChange={onChangeComment} className="textarea" placeholder= "Add a comment"></textarea>
                            <button className="button_none_bordered" onClick={save}>Post</button>
                        </fieldset>
                    </div>
                ))}
            </div>

            <div className="news_Feed_right_item">
                <div>
                    <div className=" news_Feed_right_item_header">
                        <label>Suggestions For You</label>
                        <button className="button_none_bordered">See All</button>
                    </div>
                    {posts.map((post, index) => (
                    <div className="news_Feed_Recommendations">
                        <Image  src={post.image} alt={`Post ${index}`}/>
                        <div>
                            <p>{post.name}</p>
                            <p>Name</p>
                            <p>Followed by terylucas + 2 more</p>
                        </div>
                        <button className="button_none_bordered">Follow</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {isModalOpen && <Stories closeModal={closeModal} posts={posts}/>}
    </main>
  )
}