import React from "react";

const Login = () => {
  return (
    <>
      <form className="login">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
