import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Emblem from "./assets/images/Emblem_of_India.svg";
import Line1 from "./assets/images/Line 1.png";
import eyelash from "./assets/images/eyelash.png";
import im1 from "./assets/images/im1.jpg";
import im23 from "./assets/images/im23.jpg";
import im33 from "./assets/images/im33.jpg";
import google from "./assets/images/google.svg";

class App extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-md"
          style={{backgroundColor: "#F2F6FF"}}
        >
          <div className="container-fluid">
            <a href='hello'
              className="navbar-brand "
              style={{fontSize: "2.75rem",fontFamily:"Inter"}}
            >
              <img alt='#'
                src={Emblem}
                className="mt-2 ms-4 me-1"
                style={{width:"2rem" ,height:"3.245625 rem",float: "left"}}
              />
              <img alt='#'
                src={Line1}
                className="mt-2 ms-1 me-1"
                style={{width:"0.02rem" ,height:"3.0625rem",float: "left"}}
              />

              <span
                className="mt-1 ms-1 me-1"
                style={{color: "#18CDCA",float: "left",fontWeight: "600"}}
              >
                Med
              </span>
              <span
                className="mt-1  "
                style={{color: "#4F4F4F",float: "left",fontWeight: "600"}}
              >
                Repo
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Navbar"
            >
              <span className="fa fa-list"></span>
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
              <ul
                className="navbar-nav ms-auto mb-2 mb-lg-0"
                style={{fontSize:"larger",fontWeight:"400",fontFamily: "Inter",lineHeight: "1.895625 rem"}}
              >
                <li className="nav-item">
                  <a className="p-3 nav-link" href="/" style={{color:"#0B5B5A"}}>
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="p-3 nav-link" href="/" style={{color:"#0B5B5A"}}>
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <a className="p-3 nav-link" href="/" style={{color:"#0B5B5A"}}>
                    Know More
                  </a>
                </li>
                <li class="nav-item">
                <a className="p-3 nav-link" href="/" style={{color:"#0B5B5A"}}>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row container-fluid">
          <div
            className="col-md-3 col-sm-7 mt-1"
            style = {{position: "relative", marginLeft: "5rem"}}
          >
            <div
              className="mt-2"
              style={{fontSize: "xx-large",color: "rgb(13, 13, 109)",fontFamily:"Droid Sans",fontWeight: "900",textShadow: "0.0625rem 0 #000000"}}
            >
              Hi, Welcome!
            </div>
            <br />

            <form action="/add_profile" method="post">
              <div
                className="mb-3"
                style={{fontFamily: "Droid Sans",color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="Name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="Name"
                  aria-describedby="name"
                  placeholder="@John"
                  name="Name"
                />
              </div>

              <div
                className="mb-3"
                style={{fontFamily: "Droid Sans", color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="Email" className="form-label">
                  Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="Email"
                  placeholder="yourname@example.com"
                  name="email"
                />
                <div
                  id="email_exists"
                  className="pt-1"
                  style={{marginBottom: "-0.625rem"}}
                ></div>
              </div>

              <div
                className="mb-3"
                style={{fontFamily: 'Droid Sans', color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="Designation" className="form-label">
                  Designation
                </label>
                <input
                  type="Designation"
                  name="Designation"
                  className="form-control"
                  id="Designation"
                  placeholder="@ Sr. UI/UX Designer"
                />
              </div>

              <div
                className="mb-3"
                style={{fontFamily: 'Droid Sans', color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="id_password"
                />

                <img alt='#'
                  src={eyelash}
                  style={{top: "-2rem",width:"5%",position: "relative",left:"18rem",cursor: "pointer"}}
                  id="toggler"
                />

                <div
                  style={{color:"red",fontSize:"12px",display: "none",position: "relative",top:"-1rem"}}
                  id="pass_creds"
                >
                  8-12 letters & at least one special,number,capital and
                  lowercase alphabet
                </div>
              </div>

              <div
                className="mb-3"
                style={{fontFamily: 'Droid Sans', color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="Confirm password" className="form-label">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="id_password2"
                />
                <img alt='#'
                  src={eyelash}
                  style={{top: "-2rem",width:"5%",position: "relative",left: "18rem",cursor:"pointer"}}
                  id="togglers"
                />
                <div
                  style={{color:"red",display: "none",fontSize: "12px",position: "relative",top: "-1rem"}}
                  id="notmatch"
                >
                  The passwords do not match
                </div>
                  
              </div>

              <div style={{display: "flex",position:"relative",top: "-1.6rem"}}>
                <div style={{marginTop: "0.2rem", marginRight: "0.2rem"}}>
                  <label class="toggle">
                    <input type="checkbox" id="termsand" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div style={{marginLeft: "0.2rem",fontFamily: 'Inter',fontSize: "0.9375rem"}}>
                  I agree to the{' '}
                  <a href="/" style={{color: "#0f8f69"}}>
                    terms of service
                  </a>{' '}
                  and{' '}
                  <a href="/" style={{color: "#0f8f69"}}>
                    privacy policy.
                  </a>
                </div>
              </div>

              <br />
              <button
                disabled
                class="btn container-fluid"
                style={{backgroundColor: "#00A09A",color: "white",height:"3rem"}}
                id="Signup"
              >
                <i
                  className="fa fa-lock"
                  style={{color: "white", marginRight: "0.2rem"}}
                ></i>{' '}
                Sign Up
              </button>
              <br />
              <br />
              <div className="row">
                <hr
                  className=" col-md-2 mt-2 mb-3 line-okay ms-4"
                  style={{borderColor: "rgb(122, 120, 120)"}}
                />
                <div
                  className="col-md-5 lead"
                  style={{fontSize: "12px",opacity: "80%"}}
                >
                  Or, log in with your email
                </div>
                <hr
                  className=" col-md-2 mt-2 mb-3 line-okay"
                  style={{borderColor: "rgb(122, 120, 120)"}}
                />
              </div>
              <br />
              <button
                className="btn btn-outline-secondary container-fluid"
                style={{marginLeft:"0.625rem",width:"95%"}}
              >
                <img alt='#'
                  src={google}
                  style={{ marginRight: "0.2rem",height:"1.875rem"}}
                ></img>
                Sign in with Google
              </button>
              <br />
            </form>
          </div>

          <div class="carousel-okay col-6 container-fluid mt-5">
            <div
              id="myslideshow"
              className="carousel-okay  carousel slide "
              data-ride="carousel"
              data-interval="100"
            >
              <div className="carousel-okay carousel-inner">
                <div className="carousel-okay carousel-item active">
                  <img
                    src={im1}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
                <div className="carousel-okay carousel-item">
                  <img
                    src={im23}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
                <div className="carousel-okay carousel-item">
                  <img
                    src={im33}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
              </div>
              <div style={{textAlign:"center", position:"relative", top: "-50px"}}>
                <br />
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
