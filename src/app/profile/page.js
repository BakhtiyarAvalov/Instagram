'use client'

import { useState } from 'react'
import { authorize } from '../store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'

import Image from "next/image"

import Posts from '@/components/posts'
import ModalPost from '@/components/modalPost/modalPost'
import FollowersModal from '@/components/followersModal/followersModal'
import ShareStories from '@/components/shareStories/shareStories'
import profile from '../../../public/images/svg/Profile.svg'
import avatar from '../../../public/images/svg/Avatar.svg'
import saved from '../../../public/images/svg/save.svg'
import top from '../../../public/images/svg/top.svg'
import player from '../../../public/images/svg/player.svg'
import post from '../../../public/images/post.png'
import post1 from '../../../public/images/post1.png'
import post2 from '../../../public/images/post2.png'
import post3 from '../../../public/images/post3.png'
import post4 from '../../../public/images/post4.png'
import post5 from '../../../public/images/post5.png'


const posts = [
    {
        show: 24,
        Allcomments: 55,
        like: 190,
        image: post5,
        name: "user1",
    },
    {
        show: 244,
        Allcomments: 48,
        like: 86,
        image: post3,
        name: "user2"
    },
    {
        show: 800,
        Allcomments: 35,
        like: 150,
        image: post4,
        name: "user3"
    },   
    {
        show: 39,
        Allcomments: 94,
        like: 290,
        image: post1,
        name: "user4"
    }
    ,   
    {
        show: 3,
        Allcomments: 4,
        like: 20,
        image: post2,
        name:  "user5"
    },   
    {
        show: 39,
        Allcomments: 9,
        like: 20,
        image: post,
        name: "user6"
    }
    
]


export default function Profile() {

    const isAuth = useSelector((state) =>state.auth.isAuth)
    const dispatch = useDispatch()

    
    // const {posts, setPosts} = useState(posts)

    const [modaPostlActive, setModalPostActive] = useState(false)
    const [addStories, setAddStories] = useState(false)
    const [followersmodalActive, setFollowersModalActive] = useState(false)
    const [currentPost, setcurrentPost]=useState({})
    const [comments, setComments] = useState(""); 
    const [allComments, setAllComments] = useState([])
    
    // const [selectedPostIndex, setSelectedPostIndex] = useState(0);

    const openCurrentPost = (post, index) => {
        console.log(post.image)
        setModalPostActive(true) 
        setcurrentPost(post) 
        // setSelectedPostIndex(index) 
    }

    
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

    // const goToPreviousPost = () => {
    //     const nextItem = (currentPost.index + 1)
    //     }
     
    // const goToNextPost = () => {
    //     console.log("post");

       
    //         setSelectedPostIndex(selectedPostIndex + 1);
        
    // };




    return (
    <main className='profile-position ml'>
        <div className='flex container flex-cl'>
            <div className='flex m8 profile flex-jc-sb' >
                <Image alt='' src={profile} onClick={()=>setAddStories(true)}/>
                <div className='flex flex-cl profile-card'>
                    <div className='flex flex-ai-c profile-card-nick'>
                        <h3>terrylucas</h3>
                        <button className='button profile-card-buttom'>Follow</button>
                        {isAuth && < button className='button-no-border' onClick={authorize}>Выйти</button >}
                    </div>
                    <div className='flex followers'>
                        <p onClick={() => setFollowersModalActive(true)}>1.285 posts</p>
                        <p onClick={() => setFollowersModalActive(true)}>4M followers</p>
                        <p onClick={() => setFollowersModalActive(true)}>1.250 following</p>
                    </div>
                    <p>Terry lucas</p>
                </div>
            </div>
            <div className='profile-card-line'></div>
            <div className='profile-card-line-item'></div>
            <div className='profile-card-icon flex flex-ai-c flex-jc-sb followers'>
                <h3> <Image alt='' src={top}/>Posts</h3>
                <h3> <Image alt='' src={player}/>reels</h3>
                <h3> <Image alt='' src={saved}/>saved</h3>
                <h3> <Image alt='' src={avatar}/>tagged</h3>
            </div>
            <div className='flex flex-jc-sb'>
                <Posts posts={posts} onClick={openCurrentPost}/>
            </div>
        </div>
        {followersmodalActive && <FollowersModal setFollowersModalActive={setFollowersModalActive}/>}
        {modaPostlActive &&  <ModalPost removeComment={removeComment} comments={comments} save={save} allComments={allComments} onChangeComment={onChangeComment} currentPost={currentPost} setModalPostActive={setModalPostActive}/>}
        {addStories && <ShareStories setAddStories={setAddStories}/>}
    </main>
  )
}