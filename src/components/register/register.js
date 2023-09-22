'use client'


import { END_POINT } from '@/config/end-point'
import axios from 'axios'
import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { authorize } from "@/app/store/slices/authSlice"

import Image from "next/image"

export default function Register () {
    const isAuth = useSelector((state) =>state.auth.isAuth)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     axios.get(`${END_POINT}/api/auth/signin`).then(res => {
    //       setCities(res.data)
    //     })
    //   },[])

    return (
        <section className="main-card">
            <div className="card">
                <Image alt="" src={instagram}/>
                <from className="form">
                    <input className="input" placeholder="Mobile Number or E-mail"/>
                    <input className="input" placeholder="Password"/>
                    <button className="button button-sign-up" onClick={()=>dispatch(authorize())}>log in</button>
                </from>
                <div className="card-line">
                    <div className="line"></div>
                    OR
                    <div className="line"></div>
                </div>
                <button className="button button-facebook-login">
                    <Image alt="" src={facebook}/>
                    Log in wiht Facebook
                </button>
                <a>Forgot password?</a>
            </div>
            <div className="card">
                <p>Have an account? <Link href='/login'> Sign up</Link></p>
            </div>
            <div className="installation">
                Get the app.
                <div className="installation-link">
                    <Image alt="" src={googleLogo}/>
                    <Image alt="" src={MicrosoftLogo}/>
                </div>
            </div>
        </section>
    )
}