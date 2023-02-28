import { useState } from "react";
import { axios } from "axios"
 
function Loginform() {
  const [Emailaddress, setEmailaddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
//   const [token, settoken] = useState(""); 
//   const [loginStatus, setloginStatus] = useState("null");  
  /*procesing, success, error */

  

  const emailAddressChangeHandler = (e) => {
    
    console.log("input values: ", e.target.value);
    setEmailaddress(e.target.value)
  };
  const passwordChangeHandler = (e) => {
    console.log("input values: ", e.target.value);
    setPassword(e.target.value)
  };
  const confirmpasswordChangeHandler = (e) => {
    console.log("input values: ", e.target.value);
    setConfirmPassword(e.target.value)
  };

   const signupHandler = () => {
    // setloginStatus('procesing');
    const data = {
        email: Emailaddress,
        Password: Password,         
    };
    console.log("request data:", data);
    axios
    .post("https://reqres.in/api/register", data)
    .then((res) => {
    console.log("register res: ", res);
    // settoken(res.data.token);
    // setloginStatus('success');
 
})

    // .catch((err) => {
    // setloginStatus('error');

    // });
   };
        
  let hasValues = Emailaddress && Password && ConfirmPassword;
  let ispasswordMatch =
  Password && ConfirmPassword && Password === ConfirmPassword;
  let isValid = hasValues && ispasswordMatch; 
  


  return(
    //   {loginStatus === 'success' ?(
    //       <div><h3>Login Successfull</h3>
          
    //       ) : (
    //           <>
    //           <h1>Login here</h1>
              
    //           </>
    //           )}    
              
      <div id={"loginform"}>
      <form className={"form"}>
          
      {!hasValues ? (
          <div className={'Invalid'}>All fields are required</div>
          ) : ( 
            ""
          )}
          
          {!ispasswordMatch ? (
          <div className={'Invalid'}>Invalid Password</div>
          ) : ( 
            ""
          )} 
          
         <div className={"form-group"}>
          <label>"Email address":</label>
          <input
            name={"emailAddress"}
            value={Emailaddress}
            onChange={emailAddressChangeHandler} />
        </div>


        <div className={"form-group"}>
          <label>"Password":</label>
          <input 
          name={"Password"} 
          type={'password'}
          value={Password} 
          onChange ={passwordChangeHandler} />
        
        </div>
        <div className={"form-group"}>
          <label>"Confirm Password":</label>
          <input name={"Confirm_Password"} 
          type={'password'} 
          value={ConfirmPassword} 
          onChange ={confirmpasswordChangeHandler} />
        </div>
        {/* {loginStatus ==='procesing' ? ( 
        <div>procesing</div> 
         ) : (
         
        )} */}
         <button 
        disabled={!isValid} 
        type={'button'}
        onClick={() => signupHandler ()}
        >
        Register
        {/* {token} */}
       </button>

      </form>{" "}
        
      </div>
  );  
  }
  export default Loginform;