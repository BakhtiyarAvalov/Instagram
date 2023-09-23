'use client'

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import {signUp} from "@/app/store/slices/authSlice"
import { useEffect } from "react"

import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'
import Image from "next/image"


export default function Login() {

    const [email, setEmail] = ("")
    const [full_name, setFull_name] = ("")
    const [username, setUsername] = ("")
    const [password, setPassword] = ("")

    const router = useRouter()
    const isAuth = useSelector((state) =>state.auth.isAuth)
    const dispatch = useDispatch()

    const sendVerify = ()=>{
        dispatch(signUp(email, full_name, username, password))
    }

    useEffect(()=>{
        if(isAuth)router.push("/regisret")
        if(!isAuth)router.push("/login")
      },[isAuth])

    return (
        <section className="main-card">
            <div className="card">
                <Image alt="" src={instagram}/>
                <p>Sign up to see photos and videos from your friends.</p>
                <button className="button button-facebook">
                    <Image alt="" src={facebook}/>
                    Log in wiht Facebook
                </button>
                <div className="card-line">
                    <div className="line"></div>
                    OR
                    <div className="line"></div>
                </div>
                <from className="form">
                    <input className="input" placeholder="Mobile Number or E-mail" onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="input" placeholder="Full Name" onChange={(e)=>setFull_name(e.target.value)}/>
                    <input className="input" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="input" placeholder="Password" onChange={(e=>setPassword(e.target.value))}/>
                    <div>
                        <p>People who use our service may have uploaded your contact information to Instagram. <a src=''>Learn More</a></p>
                        <p>By signing up, you agree to our
                            <a> Terms</a>,
                            <a> Privacy</a>,
                            <a> Policy</a>,
                            and 
                            <a> Cookies Policy</a>
                        </p>
                    </div>
                    <button className="button button-sign-up" type='button' onClick={sendVerify}>Sign up</button>
                </from>
            </div>
            <div className="card">
                <p>Have an account? <a href='/register' > Log in</a></p>
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