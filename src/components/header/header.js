'use client'

import instagram from '../../../public/images/icon/instagram.png'
import avatar from '../../../public/images/icon/avatar.png'
import compass from '../../../public/images/icon/compass.png'
import heart from '../../../public/images/icon/heart.png'
import home from '../../../public/images/icon/home.png'
import massage from '../../../public/images/icon/massage.png'
import plus from '../../../public/images/icon/plus.png'


import Image from "next/image"
export default function Header () {
    return (
        <header className="header">
            <div className = "container">
                <div className="header-item">
                    <div className = "header-logo">
                        <Image src={instagram}/>
                    </div>
                    <div className='header-search'>
                        <input className="header-search-input" placeholder='Search'></input>
                    </div>
                    <div className='header-icon'>
                        <Image src={home}/> 
                        <Image src={massage}/>
                        <Image src={plus}/>
                        <Image src={compass}/>
                        <Image src={heart}/>
                        <Image src={avatar}/>   
                    </div>
                </div>
            </div>
        </header>
    )
}