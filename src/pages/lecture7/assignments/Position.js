import React, { Fragment } from "react";


const Position = (props) => {
  return (
    <div className={props.className}>
      X: {props.x || 0}, Y: {props.y || 0}
    </div>
  )
}

export default Position