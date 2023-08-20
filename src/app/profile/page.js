import Header from '@/components/header/header'
import Posts from '@/components/posts'
import avatar from '../../../public/images/icon/avatar.png'
import ava from '../../../public/images/svg/avatar.svg'
import player from '../../../public/images/svg/player.svg'
import save from '../../../public/images/svg/save.svg'
import top from '../../../public/images/svg/top.svg'

const posts = [
    {
        show: 24,
        comments: 55,
        like: 190
    },
    {
        show: 244,
        comments: 48,
        like: 86
    },
    {
        show: 800,
        comments: 35,
        like: 150
    },    {
        show: 39,
        comments: 94,
        like: 290
    }
]


import Image from "next/image"

export default function Profile() {
  return (
    <main>
        <Header/>
        <div className='flex container   flex-cl'>
            <div className='flex m8 profile flex-jc-sb' >
                <Image  src={avatar}/>
                <div className='flex flex-cl profile-card'>
                    <div className='flex flex-ai-c profile-card-nick'>
                        <h3>nickname</h3>
                        <button className='button profile-card-buttom'>Follow</button>
                        <p>...</p>
                    </div>
                    <div className='flex'>
                        <p>Posts</p>
                        <p>followers</p>
                        <p>Following</p>
                    </div>
                    <p>full name</p>
                </div>
            </div>
            <div className='profile-card-line'></div>
            <div className='profile-card-line-item'></div>
            <div className='profile-card-icon flex flex-ai-c flex-jc-sb'>
                <h3> <Image src={top}/>Posts</h3>
                <h3> <Image src={player}/>reels</h3>
                <h3> <Image src={save}/>saved</h3>
                <h3> <Image src={ava}/>tagged</h3>
            </div>
            <Posts posts={posts}/>
        </div>
    </main>
  )
}