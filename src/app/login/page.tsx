import './index.css'

export default function Login() {
  return (
    <div className="login">
      <div className='login-card'>
      <div className="sign-in">
          <div>Sign in</div>
          <input placeholder="User name" type={"text"}></input>
          <input placeholder="Password" type={"password"}></input>
          <button className="signin-btn">Sign in</button>
          <div>or signin with</div>
          <div className="signin-by"></div>
        </div>
        <div className="approach-signup">
          <button
            className="approach-btn"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
