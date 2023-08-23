
import colorLogo from '../assets/Color 1.png'; 

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={colorLogo} alt="image" />
        <h1>Welcome back</h1>
      </div>

      <form>
        <div className="email">
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label><br />
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
