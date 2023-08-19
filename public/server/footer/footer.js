'use client'

import instagram from '../../images/icon/instagram.png'

import Image from "next/image"
export default function Footer () {
    return (
        <footer className="footer">
            <div className = "container">
                <div className="footer-item">
                    <a src="">Meta</a>
                    <a src="">About</a>
                    <a src="">Blog</a>
                    <a src="">Jobs</a>
                    <a src="">Help</a>
                    <a src="">API</a>
                    <a src="">Privacy</a>
                    <a src="">Terms</a>
                    <a src="">Top Accounts</a>
                    <a src="">Locations</a>
                    <a src="">Instagram lite</a>
                    <a src="">Contract Uploading & Non-User</a>
                    <a src="">Meta Verified</a>
                </div>
                <div className='footer-item'>
                    <select id="input">
                        <option>English</option>
                        <option>Русский</option>
                        <option>Français</option>
                        <option>Español</option>
                    </select>
                    <p>Instagram from Meta</p>
                </div>
            </div>
        </footer>
    )
}