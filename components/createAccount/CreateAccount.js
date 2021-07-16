// import {useEffect, useState} from 'react';

import useInput from '../../hooks/use-input'
import classes from  './create.module.css'

const Create = (props) => {

  
  const { value:enteredname ,
    hasError:nameInputHasError,
    isValid:enteredNameisValid,
    valueChangeHandler:enteredUserNameHandler,
    valueBlurHandler:nameInputBlurHandler,
    reset:restNameInput
  } =  useInput(value => value.trim() !== '' && value.length >3) 

  const { value:enteredDob ,
    hasError:dobInputHasError,
    isValid:entereDobisValid,
    valueChangeHandler:enteredDobChangeHandler,
    valueBlurHandler:enteredDobBlurHandler,
    reset:restDobInput
  } =  useInput(value => value.trim() !== '' ) 

  const { value:enteredNum ,
    hasError:NumInputHasError,
    isValid:entereNumisValid,
    valueChangeHandler:enteredNumChangeHandler,
    valueBlurHandler:enteredNumBlurHandler,
    reset:restNumInput
  } =  useInput(value => value.trim() !== '' && value.length===10 ) 
 
  let formIsValid = false;

    if(enteredNameisValid && entereDobisValid && entereNumisValid){
      formIsValid = true
    }


  const formSubmitHandler = (event) =>{
      event.preventDefault();
      if(!enteredNameisValid || !entereDobisValid || !entereNumisValid){
        return
      }
      const Data = {
        name: enteredname,
        dob:enteredDob,
        Number: enteredNum,
      };
  
      props.onAddMeetup(Data);
      restNameInput()
      restDobInput()
      restNumInput()

  }


  const nameInputClasses = nameInputHasError ? `${classes.formcontrol} ${classes.invalid}` : `${classes.formcontrol}`
  const dobInputClasses = dobInputHasError  ?`${classes.formcontrol} ${classes.invalid}` : `${classes.formcontrol}`
  const numinputclasses = NumInputHasError  ?`${classes.formcontrol} ${classes.invalid}` : `${classes.formcontrol}`

  return (
    <div className={classes.loginDiv}>
    <form onSubmit={formSubmitHandler}>
        <h3>Create Account</h3>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Name</label>
        <input 
        type='text' id='name' 
        value={enteredname}
        onBlur={nameInputBlurHandler}
         onChange={enteredUserNameHandler}
          />
      {nameInputHasError &&  <p className={classes.errortext}>Name should minimum of 3 letters</p> }
      </div>
      <div className={dobInputClasses}>
        <label htmlFor="text">Your Dob(dd-mm-yyyy)</label>
        <input 
        type='text' id='text' 
        value={enteredDob}
        onBlur={enteredDobBlurHandler}
         onChange={enteredDobChangeHandler}
          />
      {dobInputHasError &&  <p className={classes.errortext}>Dob must not be empty</p> }
      </div>
      <div className={numinputclasses}>
        <label htmlFor='number'>Your Number</label>
        <input 
        type='number' id='number' 
        value={enteredNum}
        onBlur={enteredNumBlurHandler}
         onChange={enteredNumChangeHandler}
          />
      {NumInputHasError &&  <p className={classes.errortext}>Enter Valid Number</p> }
      </div>
      <div className={classes.formactions}>
        <button disabled={!formIsValid} type='submit'>Login with otp</button>
      </div>
    </form>
    <hr></hr>
    </div>
  );
};

export default Create;

