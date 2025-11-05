import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Signup from "./Signup";
import "./Login.css" 

const Login = () => {
    return(
        <div className="login-container">
        <h1 className="header">Log In to TruthLab</h1>

        <form> 
            <div className="input-group">
                <label htmlFor="email">Email address</label>
                <div className="input-field-container">
                    <i className="fa-regular fa-user"></i>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
            </div>

            <div className="input-group"> 
                <label htmlFor="password">Password</label>
                <div className="input-field-container">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
            </div>

            <a href="#" className="forgot-password">Forgot Password?</a>

            <button type="submit" className="btn primary-btn">Log in</button>
            <button type="button" className="btn secondary-btn">
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google logo"
                    className="google-icon"
                />
                Login with Google
            </button>
        </form>

        <p className="signup-text">
            Don't have an account?  <Link to="/signup">Sign up</Link> 
        </p>
    </div>
    )
}


export default Login