import React, { useState, useEffect } from "react";
import "./alert.css";
import { cleareMesage } from "../../../actions/todosActions";
import { connect } from "react-redux";

function Alert(props) {
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    const timeShowMsg = setTimeout(() => {
      setShow(false);
      props.cleareMesage(props.id);
    }, 3000);

    return () => {
      clearTimeout(timeShowMsg);
    };
  });

  return isShow ? (
    <div className={`alert alert-${props.status} notification`} role="alert">
      {props.text}
    </div>
  ) : null;
}

function mapDispatchToProps(dispatch) {
  return {
    cleareMesage: (id) => dispatch(cleareMesage(id)),
  };
}

export default connect(null, mapDispatchToProps)(Alert);
