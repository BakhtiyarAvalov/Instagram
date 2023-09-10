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

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file); 
      setFileData(null); 
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFileData(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }


      const [text, setText] = useState('');
      const [minLength, setMinLength] = useState(0);
      const [maxLength, setMaxLength] = useState(200); 

      const handleTextChange = (e) => {
        const newText = e.target.value;
        if (newText.length >= minLength && newText.length <= maxLength) {
          setText(newText);
        }
      }

      const back =() =>{
        setCreatePostShear(false)
        setModalActive(true)
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
        {modalActive && <Modal setActive={setModalActive} setCreatePostShear={setCreatePostShearActive} fileData={fileData} handleFileChange = {handleFileChange} selectedFile={selectedFile}/>}
        {createPostShear && <Shear back={back} handleTextChange={handleTextChange} maxLength={maxLength} close={setCreatePostShear} fileData={fileData} text={text}/>}
    </main>
  )
}