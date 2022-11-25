import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Admin from './Admin';
import Users from './Users';
import './SignInForm.css';

function SignInform() {


  const nameRef = useRef();
  const passwordRef = useRef();

  const getName1 = localStorage.getItem('nameRole1');
  const getPassword1 = localStorage.getItem('password1');

  const getName2 = localStorage.getItem('nameRole2');
  const getPassword2 = localStorage.getItem('password2');

  const handleSubmit = () => {
    if (
      nameRef.current.value == 'admin' &&
      passwordRef.current.value == '12345'
    ) {
      localStorage.setItem('nameRole1', 'admin');
      localStorage.setItem('password1', '12345');
    } else if (
      nameRef.current.value == 'user' &&
      passwordRef.current.value == '56789'
    ) {
      localStorage.setItem('nameRole2', 'user');
      localStorage.setItem('password2', '56789');
    }
  };
  return (
    <div>
      {getName1 && getPassword1 ? (
        <Admin />
      ) : getName2 && getPassword2 ? (
        <Users />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="title">Sign In</h1>
          <div className=" input name">
            <label htmlFor="name">Name</label>
            <input name="email" ref={nameRef} type="text" id="name" />
          </div>
          <div className="input password">
            <label htmlFor="password">password</label>
            <input
              name="password"
              ref={passwordRef}
              type="password"
              id="password"
            />
          </div>
          <button className="btn">Sign In</button>
          <p>
            Don't have an account <Link to="/signupform">Sign Up</Link>
          </p>
        </form>
      )}
    </div>
  );
}

export default SignInform;
