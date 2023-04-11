import React, { Component } from 'react'

import google from "../assets/images/google.svg";
import eyelash from "../assets/images/eyelash.png";



class Signup extends Component {
  render() {
    return (<>
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
    
    </>
    )
  }
}

export default Signup