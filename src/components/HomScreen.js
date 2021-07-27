import React from 'react';
import '../css/homeScreen.css';
import Navbar from '../components/Navbar'
import Banner from './Banner';

const HomScreen = () => {
    return (
        <div className='homeScreen'>
            <Navbar/>
            <Banner/>
        </div>
    )
}

export default HomScreen
