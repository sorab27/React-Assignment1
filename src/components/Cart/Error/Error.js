import React from "react";
import "./Error.css";
import ErrorIcon from "@material-ui/icons/Error";

function Error() {
  return (
    <div className="error">
      <div>
        <ErrorIcon />
      </div>
      <div>
        <p>Error!</p>
      </div>
    </div>
  );
}

export default Error;
