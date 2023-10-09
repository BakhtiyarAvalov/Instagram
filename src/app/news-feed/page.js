"use client"
import { useState, useEffect, useRef} from "react"
import { getAllPosts } from "../store/slices/postSlice"
import { useSelector, useDispatch } from 'react-redux'
import { END_POINT } from "@/config/end-point"
import { useRouter } from 'next/navigation'


import ModalLike from "@/components/modalLike/modalLike"
import ModalPost from "@/components/modalPost/modalPost"
import Header from "@/components/header/header"
import Stories from "@/components/stories/stories"
import like from "../../../public/images/svg/like.svg"
import comment from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import rightArrow from "../../../public/images/svg/rightArrow.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"
import Image from "next/image"


export default function NewsFid() {
    const [comments, setComments] = useState(""); 
    const [allComments, setAllComments] = useState([])
    const [expanded, setExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTimer, setIsTimer] = useState()
    const [startIndex, setStartIndex] = useState(0);
    const [ModalLikeMark, setModalLikeMark] = useState(false)
    const [modaPostlActive, setModalPostActive] = useState(false)
    

    const router = useRouter()


    const isAuth = useSelector((state) =>state.auth.isAuth)
    const posts = useSelector((state) =>state.post.posts)

    const dispatch = useDispatch()
    const didMount = () => {
        dispatch(getAllPosts())
    }
    useEffect((didMount), [])
    useEffect(()=>{
        if(!isAuth)router.push("/register")
      },[isAuth])

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        
        if(isTimer){
        clearTimeout(isTimer)
        setIsTimer(null)
        }

        let timeoutID = setTimeout(() => {
        // console.log('work')
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

    const openModalLikeMark = () => {  
        setModalLikeMark(true);
    } 
    const closeModalLikeMark = () => {
        setModalLikeMark(false);
    }
    

    const step = 1;

    const Next = () => {
        console.log("next");
    if (startIndex + step < posts.length) {
            setStartIndex(startIndex + step);
        }else{
            setStartIndex(0)
        }
    }
    
    const Prev = () => {
        console.log("prev");
        if (startIndex - step >= 0) {
            setStartIndex(startIndex - step);
        }
        else{
            setStartIndex(posts.length - step);
        }
    };

    
    console.log( " posts", posts) ;
  return (
    <main  className="">
        <Header/>
        <div className=" container newsFeed">
            <div className="news_Feed_left_item">
                <div className="newsFeed_story">
                    <span className="newsFeed_story_left_item" onClick={Prev} id="arrow"><Image alt="" src={leftArrow}/></span>
                    {posts.map((item, index) => (
                        <p style={{cursor:"pointer"}} className="newsFeed_stories_play">
                            <img key={index} onClick={openModal} src={`${END_POINT}${item.image}`} alt=""/> 
                        </p>
                    ))}

                    <span className="newsFeed_story_right_item" id="arrow" onClick={Next}><Image alt="" src={rightArrow}/></span>
                </div>
                {posts.map((item, index) => (
                    <div key={index}>
                        <div className="newsFeed_post">
                            <div className="newsFeed_post_ava flex ">
                                <img className="mr"  src={`${END_POINT}${item.image}`} alt=""/> 
                                <h3>{item.User.username}</h3>
                            </div>
                            <p>...</p>
                        </div>
                        <div className="newsFeed_post_item">
                        <img className='postsImage' alt='' key={index} src={`${END_POINT}${item.image}`}/>
                            <div className="flex newsFeed_post_icon">
                                <p>
                                    <Image alt="" src={like}/>
                                    <Image alt="" src={comment}/>
                                </p>
                                <p>
                                    <Image alt="" src={checkbox}/>
                                </p>
                            </div>
                            <p style={{cursor: "pointer"}} onClick={openModalLikeMark}>10K Likes</p>
                            <p onClick={() => setModalPostActive(true)} className="opacity">View all 100 comments</p>
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
                    {posts.map((item, index) => (
                    <div key={index} className="news_Feed_Recommendations" >
                        <img  src={`${END_POINT}${item.image}`} alt=""/>
                        <div>
                            {/* <p>{post.name}</p> */}
                            <p>Name</p>
                            <p >Followed by terylucas + 2 more</p>
                        </div>
                        <button className="button_none_bordered">Follow</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {isModalOpen && <Stories closeModal={closeModal} posts={posts}/>}
        {ModalLikeMark && <ModalLike posts={posts} closeModalLikeMark={closeModalLikeMark} onClick={setModalLikeMark}/>}
        {/* {modaPostlActive && <ModalPost onClick={setModalPostActive}/>} */}
    </main>
  )
}