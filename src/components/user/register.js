'use client'


import { useState } from "react"

import googleLogo from '../../../public/images/icon/googleLogo.png'
import MicrosoftLogo from '../../../public/images/icon/MicrosoftLogo.png'
import instagram from '../../../public/images/icon/instagram.png'
import facebook from '../../../public/images/icon/facebook.png'


import Image from "next/image"


export default function Register () {
    const [step, setStep] = useState(1)
    return (
        <section className="main-card">
            {step === 1 && <div className="card">
                <Image src={instagram}/>
                <p>Sign up to see photos and videos from your friends.</p>
                <button className="button button-facebook">
                    <Image src={facebook}/>
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
            </div>}
            {step === 1 && <div className="card">
                <p>Have an account? <a onClick={()=>setStep(2)}> Log in</a></p>
            </div>}
            {step === 1 && <div className="installation">
                Get the app.
                <div className="installation-link">
                    <Image src={googleLogo}/>
                    <Image src={MicrosoftLogo}/>
                </div>
            </div>}
            {step === 2 &&<div className="card">
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
            </div>}
            {step === 2 && <div className="card">
                <p>Have an account? <a onClick={()=>setStep(1)}> Sign up</a></p>
            </div>}
            {step === 2 && <div className="installation">
                Get the app.
                <div className="installation-link">
                    <Image src={googleLogo}/>
                    <Image src={MicrosoftLogo}/>
                </div>
            </div>}
        </section>
    )
}