import React from 'react';
import './css/App.css';
import HomeScreen from './screens/HomScreen';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
    const user = null
    return (
        <div className="app">
            <Router>
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
