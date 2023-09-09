'use client'

import instagram from '../../../public/images/svg/Logo.svg'
import ava from '../../../public/images/svg/Ava.svg'
import compass from '../../../public/images/svg/compass.svg'
import heart from '../../../public/images/svg/heart.svg'
import home from '../../../public/images/svg/home.svg'
import massage from '../../../public/images/svg/massage.svg'
import plus from '../../../public/images/svg/plus.svg'
import player from '../../../public/images/svg/player.svg'
import search from '../../../public/images/svg/search.svg'
import menu from '../../../public/images/svg/menu.svg'

import Image from 'next/image'
import Link from 'next/link'

import Modal from '@/components/modal/modal'
import { useState } from 'react'
import Shear from '../shear/shear'

export default function Menu() {

    const [modalActive, setModalActive] = useState(false)
    const [createPostShear, setCreatePostShear] = useState(false)
    const setCreatePostShearActive = ()=>{
      setModalActive(false)
      setCreatePostShear(true)
    }

  return (
    <main className='flex menu-position'>
        <div className='flex flex-cl container menu'>
            <Image className='header-logo' src={instagram}/>
            <div className='flex flex-cl menu_items'>
                <Link href={'/profile'}><Image src={home}/> Home </Link>
                <a> <Image src={search}/> Search</a>
                <a> <Image src={compass}/>Explore</a>
                <a> <Image src={player}/>Reels</a>
                <a> <Image src={massage}/>Massage</a>
                <a> <Image src={heart}/>Notifications</a>
                <a onClick={() => setModalActive(true)}><Image src={plus}/>Create</a>
                <a> <Image src={ava}/>Ptofile</a>
            </div>
            <p className='menu_items'><Image src={menu}/> More</p>
        </div>
        <div className='menu_line'></div>
        {modalActive && <Modal setActive={setModalActive} setCreatePostShear={setCreatePostShearActive}/>}
        {createPostShear && <Shear close={setCreatePostShear}/>}
    </main>
  )
}