import React from "react";
import Todos from "../../conteiners/Todos";
import CreateTodo from "./../../conteiners/CreateTodo";
import propTypes from "prop-types";
import { isEmptyObj } from "../../utils/helpers";
import Alert from "./../../conteiners/Alert";

export default function Home({ requestSignOut, history, message }) {
  const onSingOut = () => {
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    requestSignOut();
    history.push("/login");
  };

  return (
    <>
      {!isEmptyObj(message) ? (
        <div className="alert-container">
          {message.map((msg) => {
            return (
              <Alert
                id={msg.id}
                key={msg.id}
                status={msg.status}
                text={msg.text}
              />
            );
          })}
        </div>
      ) : null}
      <button
        onClick={onSingOut}
        className="btn btn-danger m-2 d-block ms-auto"
      >
        Sing Out
      </button>
      <CreateTodo />
      <div className="container">
        <Todos />
      </div>
    </>
  );
}

Home.propTypes = {
  requestSignOut: propTypes.func,
  history: propTypes.object,
};
