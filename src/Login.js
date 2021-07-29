import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
import Logo from './assets/spotify2019-830x350.jpg'

const Login = () => {
    return (
        <div className="login">
            <img src={Logo} alt="" />
            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
