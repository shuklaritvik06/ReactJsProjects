import React from "react";

function Login() {
  return (
    <>
      <h1>Login component</h1>
      <p id="result"></p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button
          type="button"
          onClick={() => {
            document.getElementById("result").innerHTML = "Logged user";
          }}
        >
          Log User
        </button>
      </form>
    </>
  );
}

export default Login;
