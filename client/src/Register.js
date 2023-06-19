import React from "react";

const Register = () => {
  return (
    <>
      <form className="register">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">register</button>
      </form>
    </>
  );
};

export default Register;
