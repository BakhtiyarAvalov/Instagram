'use client'



import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'
import Link from "next/link"


import Image from "next/image"


export default function Register () {
    return (
        <section className="main-card">
            <div className="card">
                <Image src={instagram}/>
                <from className="form">
                    <input className="input" placeholder="Mobile Number or E-mail"/>
                    <input className="input" placeholder="Password"/>
                    <button className="button button-sign-up" >log in</button>
                </from>
                <div className="card-line">
                    <div className="line"></div>
                    OR
                    <div className="line"></div>
                </div>
                <button className="button button-facebook-login">
                    <Image src={facebook}/>
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
                    <Image src={googleLogo}/>
                    <Image src={MicrosoftLogo}/>
                </div>
            </div>
        </section>
    )
}