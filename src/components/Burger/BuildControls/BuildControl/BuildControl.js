import React, { useState } from "react";
import classes from "./BuildControl.module.css";

function BuildControl(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={() => {
          setCount(count - 1);
          props.removed();
        }}
        disabled={props.disabled}
      >
        -
      </button>
      <button
        className={classes.More}
        onClick={() => {
          setCount(count + 1);
          props.added();
        }}
      >
        +
      </button>
      <button>{count}</button>
    </div>
  );
}

export default BuildControl;
