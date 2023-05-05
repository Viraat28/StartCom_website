import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../actions/authAction.js";
import { Home } from "../../pages/home/Home";
import "./Auth.css";
// import store from "../../store/ReduxStore.js";
const Auth = () => {
  const navigate = useNavigate();
  const loading=useSelector((state)=>state.authReducer.loading)
  // console.log(store.AuthReducer.loading)
  // console.log(loading)
  const [isSignup, setIsSignup] = useState(true);
  const dispatch=useDispatch()
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setUsers(data);
  

    if (isSignup) {
      if (data.password !== data.confirmpassword) {
        setConfirmPass(false);
      }
      else{
        dispatch(signUp(data))
      }
    }
    else{
      dispatch(logIn(data))
    }

    const passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const usernamePattern = /^[a-z][0-9a-z]{6,}$/i;
    const firstnamePattern = /^[a-z]{3,24}$/i;
    const lastnamePattern = /^[a-z]{3,24}$/i;

    if(!firstnamePattern.test(data.firstname)&&isSignup){
        alert("Enter First Name as per the requirements:\n1. Should contain only alphabets\n2.length should be between 3 and 24");
        return;
    }

    if (!lastnamePattern.test(data.lastname)&&isSignup) {
      alert(
        "Enter Last Name as per the requirements:\n1. Should contain only alphabets\n2.length should be between 3 and 24"
      );
      return;
    }
    
    if(isSignup&&  !usernamePattern.test(data.username)){
        alert(
          "Enter username as per requirements:\nFirst letter should not be a number or special character\nNo special characters\nMinimum length of 7"
        );
        return;
    }

    if (!emailPattern.test(data.email)&&isSignup) {
      alert("Please enter the correct email!");
      return;
    }

    if (!passPattern.test(data.password)) {
      alert(
        "Enter password as per requirements:\nOne Upper Case letter\nOne lower Case letter \nOne special Character\nMinimum Length of 8"
      );

      return;
    }

    if ((data.password !== data.confirmpassword)&&isSignup){
      alert("Passwords do not match.");
      return;
    }
    if(data.username==="admin123"){
      navigate('/admin')
    }

    // navigate("/home");
  };
  const resForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <div className="Webname">
          <h1>STARTCOM</h1>
          <h2>##Nuture Your Ideas</h2>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h2>{isSignup ? "SignUp" : "Login"}</h2>

          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              ></input>
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            ></input>
          </div>
          {isSignup && (
            <div>
              <input
                type="email"
                placeholder="Email"
                className="infoInput"
                name="email"
                onChange={handleChange}
                value={data.email}
              ></input>
            </div>
          )}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            ></input>
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
                onChange={handleChange}
                value={data.confirmpassword}
              ></input>
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *Password MisMatch
          </span>
          <div>
            <span
              className="spanclass"
              onClick={() => {
                setIsSignup((e) => !e);
                resForm();
              }}
            >
              {isSignup
                ? "Already Have An Account Login!"
                : "Don't Have An Account SignUp!"}
            </span>
          </div>

          <button className="button-signup" type="submit">
            {loading?"Loading...":  isSignup ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  
  );
};

export default Auth;
