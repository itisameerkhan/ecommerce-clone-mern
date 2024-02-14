import './Login.scss';

const Login = () => {
  return (
    <div className="login">
        <div className="login-inner">
          <p className="title">Login to your Account</p>
          <div className="input-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
          </div>
          <button className='login-btnn'>Login</button>
        </div>
    </div>
  )
}

export default Login;