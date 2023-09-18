'use client'

import instagram from '../../../public/images/svg/Logo.svg'
import ava from '../../../public/images/svg/Ava.svg'
import compass from '../../../public/images/svg/compass.svg'
import heart from '../../../public/images/svg/heart.svg'
import home from '../../../public/images/svg/home.svg'
import massage from '../../../public/images/svg/massage.svg'
import plus from '../../../public/images/svg/plus.svg'

import Link from 'next/link'
import Image from "next/image"
import Modal from '@/components/modal/modal'
import { useState } from 'react'

export default function Header () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <header className="header">
            <div className = "container">
                <div className="header-item">
                    <div className = "header-logo">
                        <Link href="/user"><Image alt="" src={instagram}/></Link>
                    </div>
                    <div className='header-search'>
                        <input className="header-search-input" placeholder='Search'></input>
                    </div>
                    <div className='header-icon'>
                        <Link href='/news-feed'><Image alt="" src={home}/></Link>
                        <Image alt="" src={massage}/>
                        <Image alt="" src={plus} onClick={() => setModalActive(true)}/>
                        <Image alt="" src={compass}/>
                        <Image alt="" src={heart}/>
                        <Link href="/profile"><Image alt="" src={ava}/></Link> 
                    </div>
                </div>
            </div>
            {modalActive && <Modal/>}
        </header>
    )
}