import React from 'react';
import './App.css';

function Forgotpassword()
{
  return(
    <form>
    <div class='box' > </div>
    <div class='box2' > </div>
    <div class='s1' > <h1> Forgot Password</h1></div>
    <div class='s2' ><p> Enter E-mail Address:</p> <br></br><p>Create Password:</p><br></br><p>Confirm Password:</p></div>
    <div class='s3'><p> V</p></div>
    <div class='s4'><p>-LEARN</p></div>
    <div class="input">
      <div class="input-container">
        <input class="input-field" type="email" placeholder="E-mail Address" required></input>
      </div> 
      <br></br>
      <div class="input-container">
|       <input class="input-field" type="password" placeholder="Create New Password" minLength={8} required></input>
      </div>
      <br></br>
      <div class="input-container">
|       <input class="input-field" type="password" placeholder="Confirm Password" minLength={8} required></input>
      </div>
    </div> 
    <input class='button' type="submit" value="LOGIN" />
  </form>
  );
  
}
export default Forgotpassword; 