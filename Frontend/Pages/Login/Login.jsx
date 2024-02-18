import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
   

  const login = async () => {
    
  };

  const signup = async () => {
    let responseData = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const json = await responseData.json();
    responseData = json;
    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      navigate("/");
    } else {
      alert(responseData.errors)
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login-inner">
        <p className="title">{state} to your Account</p>
        <div className="input-fields">
          {state === "Signup" && (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input 
            type="password" 
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          className="login-btnn"
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Login
        </button>
        <div className="already-account">
          {state === "Signup" && (
            <p>
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login</span>
            </p>
          )}
          {state === "Login" && (
            <p>
              Create an account?{" "}
              <span onClick={() => setState("Signup")}>Click here</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
