import React, { Component } from "react";
import Todos from "../../conteiners/Todos";

class Home extends Component{
  onSingOut = () => {
     localStorage.setItem("isAuthenticated", JSON.stringify(false));
    this.props.requestSignOut();
    this.props.history.push("/login")

  };

  render() {
    return (
      <>
        <button onClick={this.onSingOut} className="btn btn-danger m-2">
          Sing Out
        </button>
        <div className="container">
          <Todos/>
        </div>
      </>
    );
  }
}

export default Home;
