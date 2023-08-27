'use client'

import instagram from '../../../public/images/svg/Logo.svg'
import ava from '../../../public/images/svg/Ava.svg'
import compass from '../../../public/images/svg/compass.svg'
import heart from '../../../public/images/svg/heart.svg'
import home from '../../../public/images/svg/home.svg'
import massage from '../../../public/images/svg/massage.svg'
import plus from '../../../public/images/svg/plus.svg'


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
                        <Image src={ava}/>   
                    </div>
                </div>
            </div>
        </header>
    )
}