// import {useEffect, useState} from 'react';
import Link from 'next/link'
import useInput from '../../hooks/use-input'
import classes from  './login.module.css'

const Login = (props) => {

  
  const { value:enteredname ,
    hasError:nameInputHasError,
    isValid:enteredNameisValid,
    valueChangeHandler:enteredUserNameHandler,
    valueBlurHandler:nameInputBlurHandler,
    reset:restNameInput
  } =  useInput(value => value.trim() !== '' && value.length===10) 

  const { value:enteredpw ,
    hasError:pwhaserror,
    isValid:pwisvaild,
    valueChangeHandler:enteredPwChangeHandler,
    valueBlurHandler:enterPwBlurHandler,
    reset:restpw
  } =  useInput(value => value.trim() !== '' ) 

 
  let formIsValid = false;

    if(enteredNameisValid && pwisvaild){
      formIsValid = true
    }


  const formSubmitHandler = (event) =>{
      event.preventDefault();
      if(!enteredNameisValid || !pwisvaild){
        return
      }

      restNameInput()
      restpw()
  }


  const nameInputClasses = nameInputHasError ? `${classes.formcontrol} ${classes.invalid}` : `${classes.formcontrol}`
  const emailInputClasses = pwhaserror  ?`${classes.formcontrol} ${classes.invalid}` : `${classes.formcontrol}`
  return (
    <div className={classes.loginDiv}>
    <form onSubmit={formSubmitHandler}>
        <h3 className={classes.Lp}>Login</h3>
      <div className={nameInputClasses}>
        <label htmlFor='phonenumber'>Phone Number</label>
        <input 
        type='number' id='phonenumber' 
        value={enteredname}
        onBlur={nameInputBlurHandler}
         onChange={enteredUserNameHandler}
          />
      {nameInputHasError &&  <p className={classes.errortext}>Enter a valid number</p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='password'>Your password</label>
        <input 
        type='password' id='password' 
        value={enteredpw}
        onBlur={enterPwBlurHandler}
         onChange={enteredPwChangeHandler}
          />
      {pwhaserror &&  <p  className={classes.errortext}>Password must not be empty</p> }
      </div>
      <div className={classes.formactions}>
        <button disabled={!formIsValid} type='submit'>Login with otp</button>
      </div>
    </form>
    <hr></hr>
    <p>Create a new account if you do not have one. You will be asked to verify your phone number at the time of creation. By</p>
    <p>creating an account you agree to our <span>Privacy policy</span>and<span>
        Trems And Condition
    </span>
    <br></br>
    <Link href='/create' >Create an Account</Link>
    </p>
    </div>
  );
};

export default Login;

