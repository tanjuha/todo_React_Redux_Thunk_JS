import React, { useState, useEffect } from "react";
import "./alert.css";

export default function Alert({ id, status, text }) {
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    const timeShowMsg = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeShowMsg);
    };
  }, []);

  return isShow ? (
    <div key={id} className={`alert alert-${status} notification`} role="alert">
      {text}
    </div>
  ) : null;
}
