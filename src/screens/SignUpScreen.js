import React, { useRef } from 'react';
import '../css/signupScreen.css';
import {auth} from '../firebase';

const SignUpScreen = () => {
    const emailRef = useRef(null) // imagen a big finger is pointing at a html element
    const passwordRef = useRef(null)

    const register = (e) => { //to register
        e.preventDefault();  //prevent default behavior
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,//takesinut with useref 
            passwordRef.current.value

            //login and give me some credentials for that user
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const signIn=(e)=> { //get signIN
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,//takesinut with useref 
            passwordRef.current.value
            //login and give me some credentials for that user
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
        }) 
    }
    return (
        <div className='signupScreen'>
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef }placeholder="Email" type="email"/> {/*  */ }
                <input ref={passwordRef} placeholder="Password" type="password" name="" id=""/>
                <button type="submit" onClick={signIn}>Sign in</button>
                <h4>
                <span className="signupScreen_gray">New to Netflix? </span> 
                <span className="signupScreen_link" onClick={register}>Sign Up now.</span> 
                </h4>
            </form>
            
        </div>
    )
}

export default SignUpScreen
