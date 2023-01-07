import React from "react";

function Register() {
  return (
    <>
      <h1>Register component</h1>
      <p id="result"></p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <button type="button" onClick={() => {
          document.getElementById("result").innerHTML = "Registered"
        }}>
          Done
        </button>
      </form>
    </>
  );
}

export default Register;
