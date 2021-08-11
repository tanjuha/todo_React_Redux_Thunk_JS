import React, { useState, useEffect } from "react";
import "./alert.css";
import { cleareMesage } from "../../../actions/todosActions";
import { connect } from "react-redux";
import propTypes from 'prop-types'
function Alert({cleareMesage, id, status, text}) {
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    const timeShowMsg = setTimeout(() => {
      setShow(false);
      cleareMesage(id);
    }, 3000);

    return () => {
      clearTimeout(timeShowMsg);
    };
  });

  return isShow ? (
    <div className={`alert alert-${status} notification`} role="alert">
      {text}
    </div>
  ) : null;
}

Alert.prototype = {
  cleareMesage: propTypes.func,
  id: propTypes.number,
  status: propTypes.string,
  text: propTypes.string
}



function mapDispatchToProps(dispatch) {
  return {
    cleareMesage: (id) => dispatch(cleareMesage(id)),
  };
}

export default connect(null, mapDispatchToProps)(Alert);
