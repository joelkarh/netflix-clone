import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    const [show, handleShow]=useState(false) // 
    const history = useHistory() // keeps history of links

    function transitionNavbar(){
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false) 
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll",transitionNavbar)
    },[]);
    return (
        //only add nav_black id show works
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img
                onClick={()=>history.push("/")}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt=""
                className='nav_logo'/>
                
            <img 
                onClick={()=> history.push("/profile")}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                alt=""
                className='nav_avatar'/>
            </div>
        </div>
    )
}

export default Navbar
