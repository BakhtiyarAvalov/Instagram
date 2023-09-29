'use client'


import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { signIn } from '@/app/store/slices/authSlice'

import Link from "next/link"
import Image from "next/image"

import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'



export default function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()
    const isAuth = useSelector((state) =>state.auth.isAuth)
    const dispatch = useDispatch()

    const systemLogIn = ()=>{
        dispatch(signIn(email, password))
    }

    useEffect(()=>{
        if(isAuth)router.push("/user")
      },[isAuth])

    return (
        <section className="main-card">
            {/* {isAuth ? <p>True</p> : <p>False</p>} */}
            <div className="card">
                <Image src={instagram} alt=""/>
                <form className="form">
                    <input className="input" placeholder="Mobile Number or E-mail" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    <input className="input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    <button className="button button-sign-up" type='button' onClick={systemLogIn}>log in</button>
                </form>
                <div className="card-line">
                    <div className="line"></div>
                    OR
                    <div className="line"></div>
                </div>
                <button className="button button-facebook-login">
                    <Image src={facebook} alt=""/>
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
                    <Image src={googleLogo} alt=""/>
                    <Image src={MicrosoftLogo} alt=""/>
                </div>
            </div>
        </section>
    )
}