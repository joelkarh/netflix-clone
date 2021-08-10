import React  from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import  '../css/profileScreen.css'
import { selectUser } from '../features/userSlice';
import {auth } from '../firebase'
import PlanScreen from './PlanScreen';
const ProfileScreen = () => {
    const user = useSelector(selectUser)
    

    return (
        <div className="profile__Screen">
            <Navbar />
            <div className="profile__ScreenBody">
                <h2>Edit Profile</h2>
                <div className="profile__ScreenInfo">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                    <div className="profile__ScreenDetails">
                        <h2>{user.email}</h2>
                        <h3> Plans </h3>
                        <PlanScreen/>
                        <div className="profile__ScreenPlans">
                            <button onClick={()=>auth.signOut()} className='profile__ScreenSignOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
