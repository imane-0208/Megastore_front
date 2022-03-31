import React from "react";
import Head from "next/head";

export function login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" className="login__signInButton">
            Sign in
          </button>
          <p>By signing-in you agree to the terms and conditions</p>
          <button type="submit" className="login__registerButton">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
