import React from 'react'
import './login.css'
import Oceans from './oceans.mp4'

export default class Login extends React.Component {
    

    render() {
        return (
            <div className="loginbg">
            <div className="login-form">
            <h2>Sign In</h2>
            <div className="form-input">
                <input type="text" name="" placeholder="Email" />
                <div className="form-input">
                <input type="password" name="" placeholder="Password" />
            <div className="form-input">
            
                <input className="sub" type="submit" name="" value="Login" />
            </div>
            <a href="#" className="forget">Forget Password</a>
             </div>
            </div>
            </div>
            <video className='bg' loop autoPlay muted>
            <source src={Oceans} type="video/mp4" />
            </video>
            </div>
        )
    }
}