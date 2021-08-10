import React, { useState, useEffect } from "react";

export default function Message({ status, message }) {
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
    <div className={`container alert alert-${status}`} role="alert">
      {message}
    </div>
  ) : null;
}
