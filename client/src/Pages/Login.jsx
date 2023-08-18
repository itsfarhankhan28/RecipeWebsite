import React from "react";
import "./Login.css";
import image from "../assets/loginpageimg.png";
import Navbar from "../components/Navbar";
import loginbgimg from "../assets/loginbgimg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const [login, setlogin] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogin = async (e) => {
    e.preventDefault();

    // const { email, password } = login;
    const login = { email, password };
    console.log(login)
    const res = await fetch("https://recipe-website-o5qs-dx4lkp0su-itsfarhankhan28.vercel.app/recipe/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    let data = res.json();
    console.log(res);

    if (res.status === 422 || !data) {
      window.alert("login unsuccessful");
      console.log("login unsuccessful");
    } else {
      window.alert("login successful");
      console.log("login successful");

      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onLogin}  method="POST">
        <div className="body">
          <div className="login">
            <div className="content11">
              <h1 id="loginhead">LogIn</h1>
              <div className="loginform">
                <div class="form3">
                  <label for="name" id="name">
                    <i class="zmdi zmdi-email zmdi-hc-2x"></i>
                  </label>
                  <input
                    type="text"
                    id="nameinput"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div class="form4">
                  <label for="name" id="name">
                    <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                  </label>
                  <input
                    type="password"
                    id="nameinput"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
                <button id="register">
                  LogIn
                </button>
              </div>
            </div>
            <div className="content2">
              <img src={loginbgimg} alt="" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
