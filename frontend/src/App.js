import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md" style="background-color: #F2F6FF;">
      
      <div class="container-fluid">
        <a class="navbar-brand " style="font-size: 2.75rem;font-family:'Inter'">
          <img src="/images/Emblem_of_India.svg" class="mt-2 ms-4 me-1" style="width:2rem ;height:3.245625 rem;float: left;">
          <img src="/images/Line 1.png"  class="mt-2 ms-1 me-1" style="width:0.02rem ;height:3.0625rem;float: left;">

          <span class="mt-1 ms-1 me-1" style="color: #18CDCA;float: left;font-weight: 600;">Med</span>
          <span class="mt-1  " style="color: #4F4F4F ;float: left;font-weight: 600;">Repo</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar" >
        <span class="fa fa-list"></span>
      </button>
      <div class="collapse navbar-collapse" id="Navbar" >
           <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style="font-size:larger ;font-weight:400 ;font-family: 'Inter';line-height: 1.895625 rem;">
            <li class="nav-item">
              <a class="p-3 nav-link" href="#" style="color:#0B5B5A; ">
                About
              </a>
            </li>
          
            <li class="nav-item">
              <a class="p-3 nav-link" href="#" style="color:#0B5B5A; ">
                Help
              </a>
          
            </li>
            <li class="nav-item">
              <a class="p-3 nav-link" href="#" style="color:#0B5B5A; ">
                Know More
              </a>
          
            </li>
            <li class="nav-item">

            
            <a class="p-3 nav-link"  href="login" style="color:#0B5B5A;" >
              Login
            </a>
        
          </li>
          
        
      </ul>
        
      </div>
</div>
</nav>





<div class="row container-fluid">


<!--form-->  
  <div class="col-md-3 col-sm-7 mt-1" style="position: relative; margin-left: 5rem;">
     <div class="mt-2" style="font-size: xx-large;color: rgb(13, 13, 109);font-family:'Droid Sans';font-weight: 900;text-shadow: 0.0625rem 0 #000000;">Hi, Welcome!</div>
     <br>



     <form action="/add_profile" method="post">
     
      <!--Name-->
      <div class="mb-3" style="font-family: 'Droid Sans'; color: rgb(13, 13, 109);font-weight:600;">
        <label for="Name" class="form-label">Name</label>
        <input type="name" class="form-control" id="Name" aria-describedby="name" placeholder="@John" name="Name">
      </div>

      <!--Email-->

      <div class="mb-3"style="font-family: 'Droid Sans'; color: rgb(13, 13, 109);font-weight:600;">
        <label for="Email" class="form-label">Email</label>
        <input type="Email" class="form-control" id="Email" placeholder="yourname@example.com" name="email">
        <div id="email_exists" class="pt-1" style="margin-bottom: -0.625rem;"></div>
      </div>

      <!--Designation-->

      <div class="mb-3"style="font-family: 'Droid Sans'; color: rgb(13, 13, 109);font-weight:600;">
        <label for="Designation" class="form-label">Designation</label>
        <input type="Designation"  name="Designation" class="form-control" id="Designation" placeholder="@ Sr. UI/UX Designer">
      </div>

      <!--Password-->
      <div class="mb-3"style="font-family: 'Droid Sans'; color: rgb(13, 13, 109);font-weight:600;">
        <label for="password" class="form-label">Password</label>
        
        <input type="password" name="password" 
        class="form-control"
        id="id_password">

        <img src='/images/eyelash.png'
        style="top: -2rem;width:5%;position: relative;left:18rem;cursor: pointer;" 
        id="toggler">

        <div style="color:red;font-size:12px;display: none;position: relative;top:-1rem" id="pass_creds">8-12 letters & at least one special,number,capital and lowercase alphabet</div>
    </div>

        <!--COnfirm Password-->
        <div class="mb-3"style="font-family: 'Droid Sans'; color: rgb(13, 13, 109);font-weight:600;">
          <label for="Confirm password" class="form-label">Confirm password</label>
          <input type="password"
          class="form-control"
          id="id_password2">

    <img src='/images/eyelash.png'
          style="top: -2rem;width:5%;position: relative;left: 18rem; cursor:pointer;" 
          id="togglers">
          
          <div style="color:red;display: none;font-size: 12px;position: relative;top: -1rem;" id="notmatch">The passwords do not match</div>
      
      </div>


        <!--Terms and conditions-->

        <div style="display: flex;position:relative;top: -1.6rem;">
       <div style="margin-top: 0.2rem; margin-right: 0.2rem;"><label class="toggle">
          <input type="checkbox" id="termsand">
          <span class="slider"></span>
        </label></div> 
        <div style="margin-left: 0.2rem;font-family: 'Inter';font-size: 0.9375rem;">I agree to the <a href="#" style="color: #0f8f69;">terms of service</a> and <a href="#"  style="color: #0f8f69;">privacy policy.</a></div>
      </div>


      <br>
      <button disabled class="btn container-fluid" style="background-color: #00A09A;color: white;height:3rem;" id="Signup"><i class="fa fa-lock" style="color: white; margin-right: 0.2rem;"></i> Sign Up</button>
      <br><br>
      <div class="row">
      <hr class=" col-md-2 mt-2 mb-3 line-okay ms-4" style="border-color: rgb(122, 120, 120);"/>
      <div class="col-md-6 lead" style="font-size: 12px;text-align: center;opacity: 80%;">Or, log in with your email</div>
      <hr class=" col-md-2 mt-2 mb-3 line-okay" style="border-color: rgb(122, 120, 120);"/>
  </div>
  <br>
  <button class="btn btn-outline-secondary container-fluid" style="margin-left: 0.625rem;width:95% ;"><img src="/images/google.svg" style=" margin-right: 0.2rem;height:1.875rem;"></img>Sign in with Google</button>
        <br>
     
    </form></div><!--form-->

   <!--image scroll--> <div class="carousel-okay col-6 container-fluid mt-5" >
      <div id="myslideshow" class="carousel-okay  carousel slide " data-ride="carousel" data-interval="100">
        <!--<div class="carousel-indicators" style="display:flex;bottom: 0.625rem">
          <button type="button" style="height: 0.2rem;width: 0.2rem;border-radius: 50%;padding: 9px;" data-bs-target="#myslideshow" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button " style="height: 0.2rem;width: 0.2rem;border-radius: 50%;padding: 9px;align-self: center;" data-bs-target="#myslideshow" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" style="height: 0.2rem;width: 0.2rem;border-radius: 50%;padding: 9px;"data-bs-target="#myslideshow" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>-->
        
        <div class="carousel-okay carousel-inner" style="height:36.375rem;width:46.625rem;position: relative;border-radius: 51px;background-color: #292D32;">
          <div class="carousel-okay carousel-item active">
            <img src="/images/im1.jpg" class="w-100 " style="height: 100%;max-width: 100%;"alt="" >
          </div>
          <div class="carousel-okay carousel-item" >
            <img src="/images/im23.jpg" class="w-100 " style="height: 100%; max-width: 100%;"alt="" >
          </div>
          <div class="carousel-okay carousel-item" >
            <img src="/images/im33.jpg" class="w-100 " style="height: 100%;max-width: 100%;"alt="" >
          </div>
        </div>
        <div style="text-align:center; position:relative; top: -50px">
          <span class="dot"></span> 
          <span class="dot"></span> 
          <span class="dot"></span> 
        </div>
      </div>
    </div> <!--image scroll-->
  

</div>



      </div>
    )
  }
}

export default App