import logo from './logo.svg';
import { useState } from "react";


import './App.css';
import Loginform from './components/loginform';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  
  
  // let hasValues = Emailaddress && Password && ConfirmPassword;
  // let ispasswordMatch =
  // Password && ConfirmPassword && Password === ConfirmPassword;
  // let isValid = hasValues && ispasswordMatch;
  
  let isValid = false;
   if (!Emailaddress || !Password || !ConfirmPassword) {
    isValid = false; 
   }  
   
   else {
      if ( Password === ConfirmPassword) {
          isValid = true;
  } 
  else {
  
  isValid = false;
  }
 }

  return (
    <div className="App">
     <Home />  
      <hr />
     <About />
       
      <h1>Form</h1>
     <Loginform />
     
      {isValid?"Form is Valid":"Form is not Valid" }
      <form className={"form"}>
          
      {!hasValues ? (
          <div className={'Invalid'}>All ields are required</div>
          ) : ( 
            ""
          )}

          {!ispasswordMatch ? (
          <div className={'Invalid'}>Invalid Password</div>
          ) : ( 
            ""
          )} 

        <div className={"form-group"}>
          <label>Email address:</label>
          <input
            name={"emailAddress"}
            value={Emailaddress}
            onChange={emailAddressChangeHandler} />
        </div>


        <div className={"form-group"}>
          <label>Password:</label>
          <input 
          name={"Password"} 
          type={'password'}
          value={Password} 
          onChange ={passwordChangeHandler} />
        
        </div>
        <div className={"form-group"}>
          <label>Confirm Password:</label>
          <input name={"Confirm_Password"} 
          type={'password'} 
          value={ConfirmPassword} 
          onChange ={confirmpasswordChangeHandler} />
        </div>
         <button disabled={!isValid} type={'button'}>Register</button>
      </form>
     </div>
   );
 }

{/* <div className={"form-group"}>
  <label>Last name:</label>
  <input name={"Last_name"} value={""} />
</div> */}

{/* <div className={"form-group"}>
  <label>Email address:</label>
  <input name={"Email_address"} value={""} />
</div> */}
export default App;
