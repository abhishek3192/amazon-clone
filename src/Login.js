import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            history.push('/')
            console.log('user login success')
        }).catch((err) => {
            alert(err.message)
        });
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log('user register success')
            history.push('/')
        }).catch((err) => {
            alert(err.message)
        });

    }


    return (
        <div className="login">
            <Link>
                <img
                className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign IN</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button className="login__signIn" onClick={login}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="register" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
