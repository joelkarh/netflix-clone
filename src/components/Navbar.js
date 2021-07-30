import React from 'react';
import { useState, useEffect } from 'react';
import '../css/navbar.css';

const Navbar = () => {
    const [show, handleShow]=useState(false)
    function transitionNabar(){
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNabar);
        return () => window.removeEventListener("scroll",transitionNabar)
    },[]);
    return (
        //only add nav_black id show works
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt=""
                className='nav_logo'/>
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                alt=""
                className='nav_avatar'/>
            </div>
        </div>
    )
}

export default Navbar
