import React from "react";
import Header from "../commonComponents/header/header";
import './login.css'
import paddylogo from './assets/paddylogo.svg'
import saltlogo from './assets/saltlogo.svg'
import breadlogo from './assets/breadlogo.svg'


const Login = () => {


    return (
        <>
            <Header />
            <div className="login_container">

                <img alt ="img" className="salt_img" src={saltlogo}></img>
                <div className="chef_title">The Chef Lane</div>
                <div className="login_form_container">
                    <div>
                        <div className="login_text_container">
                            <h2 className="login_text">Login</h2>
                            <div className="email_field"><span className="email_text">Email ID or Mobile Number</span>
                                <div><input placeholder="Enter email / mobile number"></input></div>
                            </div>
                            <div className="password_field"><div className="flex_forgot"><span className="email_text">Password</span>
                                <span className="forgot_text" onClick={() => console.log("forgot clicked")}>Forgot? </span></div>
                                <div><input placeholder="Enter password"></input></div>
                            </div>
                            <button className="continue_btn" onClick={() => console.log("continue clicked")} >Continue</button>
                        </div>
                        <div class="separator">
                            <div class="line"></div>
                            <h2>Don’t have an account? Signup </h2>
                            <div class="line"></div>
                        </div>
                        <button className="create_btn" onClick={() => console.log("createbtn clicked")}>Create New Account</button>
                        <span className="terms_conditions">By continuing, you agree to Terms & conditions of Use and Privacy Policy.</span>
                    </div>
                </div>
                <img alt ="img" className="bread_log" src={breadlogo}></img>


                <img alt ="img" className="paddy_logo" src={paddylogo}></img>

            </div>
        </>
    )
}

export default Login