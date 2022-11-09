import React from 'react'
import Image from 'next/image'
import appImage from '../../../public/assets/images/mob-app-img.webp'
import appImageLogo from '../../../public/assets/images/app-s.webp'
import Link from 'next/link'
const HsbpApp = () => {
    return (
        <div className="container">   
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="app-img">
                    <Image
                        src={appImage}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="hsbp-con">
                    <h1>Download HSBP App</h1>
                    <p>To consult with OMI astros and get a personalised Remedy Plan for all your problems. Download the app now</p>
                    <Image
                        src={appImageLogo}
                        width={"100%"}
                        height={"100%"}
                    />
                    <Image
                        src={appImageLogo}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
                <div className="app-share-link">
                    <p>Enter your mobile number to get link to download</p>
                    <input name="mobile_number"
                        onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }}
                        type="number"
                        placeholder="Enter your mobile number*"
                        maxLength={10}
                    />
                    <div className="sendLinkBtn">
                    <Link href={"/"}>SEND LINK</Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default HsbpApp