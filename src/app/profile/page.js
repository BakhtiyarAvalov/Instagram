'use client'
import Header from '@/components/header/header'
import Posts from '@/components/posts'

import profile from '../../../public/images/svg/Profile.svg'
import avatar from '../../../public/images/svg/Avatar.svg'
import save from '../../../public/images/svg/save.svg'
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
        comments: 55,
        like: 190,
        image: <Image  src={post5}/>
    },
    {
        show: 244,
        comments: 48,
        like: 86,
        image: <Image  src={post3}/>

    },
    {
        show: 800,
        comments: 35,
        like: 150,
        image: <Image  src={post4}/>

    },   
    {
        show: 39,
        comments: 94,
        like: 290,
        image: <Image  src={post1}/>

    }
    ,   
    {
        show: 3,
        comments: 4,
        like: 20,
        image: <Image  src={post2}/>

    },   
    {
        show: 39,
        comments: 9,
        like: 20,
        image: <Image  src={post}/>

    }
]


import Image from "next/image"

export default function Profile() {

  return (
    <main className='profile-position ml'>
        <div className='flex container flex-cl'>
            <div className='flex m8 profile flex-jc-sb' >
                <Image  src={profile}/>
                <div className='flex flex-cl profile-card'>
                    <div className='flex flex-ai-c profile-card-nick'>
                        <h3>terrylucas</h3>
                        <button className='button profile-card-buttom'>Follow</button>
                        <p>...</p>
                    </div>
                    <div className='flex'>
                        <p>1.285 posts</p>
                        <p>4M followers</p>
                        <p>1.250 following</p>
                    </div>
                    <p>Terry lucas</p>
                </div>
            </div>
            <div className='profile-card-line'></div>
            <div className='profile-card-line-item'></div>
            <div className='profile-card-icon flex flex-ai-c flex-jc-sb'>
                <h3> <Image src={top}/>Posts</h3>
                <h3> <Image src={player}/>reels</h3>
                <h3> <Image src={save}/>saved</h3>
                <h3> <Image src={avatar}/>tagged</h3>
            </div>
            <div className='flex flex-jc-sb'>
                <Posts posts={posts}/>
            </div>
        </div>
    </main>
  )
}