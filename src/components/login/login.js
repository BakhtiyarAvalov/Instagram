'use client'


import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/svg/Logo.svg'
import facebook from '../../../public/images/icon/facebook.png'
import Link from 'next/link'

import Image from "next/image"


export default function Login() {
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
                    <input className="input" placeholder="Mobile Number or E-mail"/>
                    <input className="input" placeholder="Full Name"/>
                    <input className="input" placeholder="Username"/>
                    <input className="input" placeholder="Password"/>
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
                    <button className="button button-sign-up">Sign up</button>
                </from>
            </div>
            <div className="card">
                <p>Have an account? <Link href='/register'> Log in</Link></p>
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