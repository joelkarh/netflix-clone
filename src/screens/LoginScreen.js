import React from 'react';
import '../css/loginScreen.css';
import {useState} from 'react'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
    const [signIn,
        setSignIn] = useState(false);
    return (
        <div className="login-screen">
            <div className="login_background">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    className='login_screen_logo'
                    alt=""/>
                <button onClick={() => setSignIn(true)} type="" className="loginScreen_button">Sign In
                </button>
                <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen_body">
                {signIn
                    ? (<SignUpScreen/>)
                    : ( 
                <> 
                <h1>Unlimited films, TV programmes and more.</h1> 
                <h2> Watch anywhere.Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3 > 
                <div className="loginScreen__input">
                        <form action="">
                            <input type="email" placeholder='Email Address' name=""/>
                            <button onClick={() => setSignIn(true)} className='loginScreen_getStarted '>
                                GET STARTED
                            </button>
                        </form>
                </div> 
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
