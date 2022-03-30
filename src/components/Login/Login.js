import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * notice na si cleanup muna ang unang pumipitik bago si mismong useEffect.
   *
   * luto - render
   * pitik - execute
   * galawan - how the function works
   *
   * useEffect - paano gumagana:
   *
   * bale ang galawan ni useEffect, pipitik lang sya pagtapos ni react magluto.
   *
   * 01. sa unang luto ni react, pipitik din si useEffect.
   * 02. pipitik ulit si useEffect kapag nag update lang yung dependencies nya.
   *
   * 03. kapag may cleanup yung useEffect mo: clean up ang unang pipitik, pagtapos nun yung useEffect function naman. (kung anong code yung nilagay mo)
   *
   */
  useEffect(() => {
    console.log('2 - efferct running');

    return () => {
      console.log('1 - cleanup');
    };
  }, [enteredPassword]);

  useEffect(() => {
    // debouncing - ang tawag kapag gusto mong i-delay yung pag pitik ng function mo. (sa case natin, useEffect function)
    const identifier = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    // clean up - kapag meron nito, ito ang unang pipitik bago yung useEffect funciton sa taas. (notice may return statement ang cleanup)
    return () => {
      console.log('CLEAN UP');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
