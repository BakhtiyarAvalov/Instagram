'use client'


import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { signIn } from '@/app/store/slices/authSlice'

import Link from "next/link"
import Image from "next/image"

import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'



export default function Register () {
    const [email, setEmail] = ("")
    const [password, setPassword] = ("")

    const router = useRouter()
    const isAuth = useSelector((state) =>state.auth.isAuth)
    const dispatch = useDispatch()

    const sendVerifyCode = ()=>{
        dispatch(signIn(email, password))
    }

    useEffect(()=>{
        if(isAuth)router.push("/user")
      },[isAuth])

    return (
        <section className="main-card">
            <div className="card">
                <Image alt="" src={instagram}/>
                <from className="form">
                    <input className="input" placeholder="Mobile Number or E-mail" onChange={(e)=> setEmail(e.target.value)}/>
                    <input className="input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                    <button className="button button-sign-up" type='button' onClick={()=>sendVerifyCode}>log in</button>
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