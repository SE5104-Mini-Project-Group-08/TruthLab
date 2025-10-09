import React from "react";
import "./Login.css" 
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login-container">
        <h1 className="header">Create your account</h1>
        <p className="tagline">Join TruthLab to start verifying news with confidence</p>

        <form>
            <div className="input-group">
                <label for="full-name">Full Name</label>
                <div className="input-field-container">
                    <i className="fa-regular fa-user"></i>
                    <input type="text" id="full-name" placeholder="Enter your full name" required />
                </div>
            </div>

            <div className="input-group">
                <label for="email">Email address</label>
                <div className="input-field-container">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
            </div>

            <div className="input-group">
                <label for="password">Password</label>
                <div className="input-field-container">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" id="password" placeholder="Create a password" required />
                </div>
                <p className="password-hint">Must be at least 6 characters long.</p>
            </div>

            <div className="input-group">
                <label for="confirm-password">Confirm Password</label>
                <div className="input-field-container">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                </div>
            </div>

            <button type="submit" className="btn primary-btn">Create Account</button>
        </form>

        <p className="signup-text">
            Already have an account? <Link to="/">Login</Link> 
        </p>
    </div>
    )
}


export default Login