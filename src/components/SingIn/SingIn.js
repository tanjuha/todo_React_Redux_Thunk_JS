import React from "react";
import propTypes from "prop-types";
import SingInForm from "../SingInForm/SingInForm";

export default function SingIn({ history }) {
  const handleSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    localStorage.setItem("isAuthenticated", true);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-6">
          <h2>Sing In</h2>
          <SingInForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

SingIn.propTypes = {
  history: propTypes.object,
};