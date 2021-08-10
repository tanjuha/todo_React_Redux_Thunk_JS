import React, { useState, useEffect } from "react";
import "./alert.css";

export default function Alert({ status, text }) {
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    const timeShowMsg = setTimeout(() => {
      setShow(false);
      
    }, 5000);

    return () => {
      clearTimeout(timeShowMsg);
    };
  }, []);

  return isShow ? (
    <div className={`alert alert-${status} notification`} role="alert">
      {text}
    </div>
  ) : null;
}
