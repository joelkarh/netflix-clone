import React, { useEffect } from 'react';
import './css/App.css';
import HomeScreen from './screens/HomScreen';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import  { login, logout, selectUser} from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
    const user = useSelector(selectUser);
    const dispatch= useDispatch() 

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
            if(userAuth){
                // console.log(userAuth);
                //logged in
                dispatch(login({
                    uid: userAuth.uid,
                    email:  userAuth.email,
                }))
            }else{
                //logged out
                dispatch(logout())
            }
        });
        return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/profile">
                        <ProfileScreen/>
                    </Route>
                </Switch>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                {!user?(<LoginScreen/>) :
                (<Switch>
                    <Route exact path="/">
                        <HomeScreen/>
                    </Route>
                </Switch>
                )}
            </Router>
        </div> 
        ); 
}

export default App
