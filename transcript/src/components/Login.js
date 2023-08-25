import React from 'react';
import colorLogo from '../assets/Color 1.png'; 
import '../login.css' 

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={colorLogo} alt="Roam logo" />
        <h1>Welcome back</h1>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button className="btn">Sign In</button>

        <div className="remember-me">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me" id="remember">Remember me</label>
          <p><a href="#">Forgot password?</a></p>
        </div>
      </form>

      <p className="register">
        Don't have an account yet?<a href="school-sign-up.html">Sign up now</a>
      </p>
    </div>
  );
}

export default Login;
