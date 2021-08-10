import React, { Component } from "react";
import Todos from "../../conteiners/Todos";
import CreateTodo from "./../../conteiners/CreateTodo";
import propTypes from "prop-types";
import Alert from "../../components/common/Alert/Alert";
import { isEmptyObj } from "../../utils/helpers";

export default class Home extends Component {
  onSingOut = () => {
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    this.props.requestSignOut();
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        {!isEmptyObj(this.props.message) ? (
          <div className="alert-container">
            {this.props.message.map((msg) => {
              return <Alert id= {msg.id} key={msg.id} status={msg.status} text={msg.text} />;
            })}
          </div>
        ) : null}
        <button
          onClick={this.onSingOut}
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
}

Home.propTypes = {
  requestSignOut: propTypes.func,
  history: propTypes.object,
};
