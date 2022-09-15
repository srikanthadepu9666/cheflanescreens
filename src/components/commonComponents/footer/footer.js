import React from "react";
import './footer.css'
import footerlogo from './assets/footerlogo.svg'
import scrooltoplogo from './assets/scrolltoplogo.svg'

const Footer = () => {

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (

        <>
            <div className="footer_container">

                <div className="footerlogo_container">
                    <div className="footerlogo"><img  alt="img"  src={footerlogo}></img></div>
                    <div className="footet_text_container">
                        <div className="faq_container">
                            <span>Mission </span>
                            <span>FAQ</span>
                            <span>Privacy Policy</span>
                            <span>Terms and Condition</span>
                            <span>Licenses & Registrations</span>
                        </div>
                        <div className="divider_hzl"></div>
                        <div className="getintouch_container">
                            <div className="support_container">
                                <span className="support_text">Get in touch with us at</span><br />
                                <span className=" support_text support_email">support@thecheflane.com </span>
                            </div>
                            <button className="contactus_btn">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="copyright_container">
                    <div className="divider_vtl"></div>
                    <div className="scrolltop" onClick={() => handleScrollTop()}><img  alt="img"  src={scrooltoplogo}></img></div>

                    <div className="copyright_text_container"><span className="copyright_text">Copyright © 2021 Specialist Foods. All rights reserved.</span></div>

                </div>
            </div>
        </>
    )
}

export default Footer