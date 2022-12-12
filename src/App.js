import React, {useEffect} from 'react';
import "./style/main.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from "./pages/homescreen/HomeScreen";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //    Logged in
                console.log(userAuth)
                dispatch(login(
                    {
                        uid: userAuth.uid,
                        email: userAuth.email
                    }
                ))
            } else {
                //    logged out
                dispatch(logout)
            }
        })
        return unsubscribe
    }, [])

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <Login/>
                ) : (
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;
