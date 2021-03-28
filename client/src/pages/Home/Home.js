import React, {useContext} from 'react';

import {AuthContext} from '../../context/auth'
import Dashboard from '../../components/Dashboard'
import LoginForm from '../../components/LoginForm'

import './Home.css';

function Home(){
    // const {user, logout} = useContext(AuthContext);
    const {user} = useContext(AuthContext);


    const home = user ? <Dashboard/> : <LoginForm />

    return home;
}

export default Home; 