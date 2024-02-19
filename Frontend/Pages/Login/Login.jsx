import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../Context/authTokenSlice";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async () => {
    let responseData = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await responseData.json();
    responseData = json;
    if (responseData.success) {
      dispatch(addToken(responseData.token));
      navigate("/");
    } else {
      // alert(responseData.errors);
      const notify = () => toast(responseData.errors);
      notify();
    }
  };

  const signup = async () => {
    let responseData = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await responseData.json();
    responseData = json;
    if (responseData.success) {
      dispatch(addToken(responseData.token));
      navigate("/");
    } else {
      // alert(responseData.errors);
      const notify = () => toast(responseData.errors);
      notify();
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
          {state}
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
