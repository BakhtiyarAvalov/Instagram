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

import { END_POINT } from '@/config/end-point'
import axios from 'axios'
import Modal from '@/components/modal/modal'
import { useState } from 'react'
import Shear from '../shear/shear'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { createPost } from '@/app/store/slices/postSlice'

export default function Menu() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [modalActive, setModalActive] = useState(false)
    const [createPostShear, setCreatePostShear] = useState(false)
    const [description, setText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileData, setFileData] = useState(null);

    const setCreatePostShearActive = ()=>{
      setModalActive(false)
      setCreatePostShear(true)
    } 
    
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
        setCreatePostShearActive()
      }
    }

    const handleSave = ()=> {
      const formData = new FormData();
      formData.append('image', selectedFile); 
      formData.append('description', description)
      dispatch(createPost(formData))
      setCreatePostShear(false)
      setText('')
      setSelectedFile(null)
      console.log("formData", formData);

    }
    

    const handleTextChange = (e) => {
    
      const newText = e.target.value;
      if (newText.length < 2200) {
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
            <Image alt="" className='header-logo' src={instagram}/>
            <div className='flex flex-cl menu_items'>
                <Link href={'/profile'}><Image alt="" src={home}/> Home </Link>
                <a> <Image alt=""  src={search}/> Search</a>
                <a> <Image alt="" src={compass}/>Explore</a>
                <a> <Image alt="" src={player}/>Reels</a>
                <a> <Image alt="" src={massage}/>Massage</a>
                <a> <Image alt=""  src={heart}/>Notifications</a>
                <a onClick={() => setModalActive(true)}><Image alt='' src={plus}/>Create</a>
                <a> <Image alt="" src={ava}/>Ptofile</a>
            </div>
            <p className='menu_items'><Image alt="" src={menu}/> More</p>
        </div>
        <div className='menu_line'></div>
        {modalActive && <Modal setActive={setModalActive}  fileData={fileData} handleFileChange = {handleFileChange} selectedFile={selectedFile}/>}
        {createPostShear && <Shear handleSave={handleSave}  back={back} handleTextChange={handleTextChange}  close={setCreatePostShear} fileData={fileData} text={description}/>}
    </main>
  )
}