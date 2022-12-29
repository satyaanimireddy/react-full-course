import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  //   const [password, setPassword] = useState("");
  //   const changeHandler = (e) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };

  const register = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber
    );
    // let user = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    //   contactNumber,
    // };
    fetch("https://reactapisthree.onrender.com/users/userRegistration", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contactNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };
  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          {/* <img
            src="http://scanfcode.com/wp-content/uploads/2017/09/cropped-Untitled-1.png"
            alt="Scanfcode"
          /> */}
          <h1>User Registration</h1>
          <form>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user ti-user"></i>
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                  placeholder="first name"
                />
              </div>
            </div>
            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user ti-user"></i>
                </span>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                  placeholder="last name"
                />
              </div>
            </div>
            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope ti-email"></i>
                </span>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <hr className="hr-xs" />
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock ti-unlock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Choose a password"
                />
              </div>
            </div>
            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock ti-unlock"></i>
                </span>
                <input
                  type="Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  placeholder="confirmPassword"
                />
              </div>
            </div>
            <hr className="hr-xs" />
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-phone"></i>
                </span>
                <input
                  type="Number"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="form-control"
                  placeholder="contactNumber"
                />
              </div>
            </div>
            <hr className="hr-xs" />

            <button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={() => {
                register();
                navigate("/loginUser");
              }}
            >
              Register
            </button>
            <p className="text-center">
              Already have an account? <Link to="/">LogIn</Link>
            </p>
            {/* <div className="login-footer">
              <h6>Or register with</h6>
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </form>
        </div>
        {/* <div className="login-links">
          <p className="text-center">
            Already have an account?{" "}
            <a className="txt-brand" href="user-login.html">
              Login
            </a>
          </p>
        </div> */}
      </main>
    </div>
  );
};
export default RegisterUser;
