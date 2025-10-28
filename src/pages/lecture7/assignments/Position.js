import React from "react";
import withMousePosition from "./withMousePosition";

const Position = (props) => {
    return (
        <div className={props.className}>
            X: {props.x || 0}, Y: {props.y || 0}
        </div>
    );
};

export default withMousePosition(Position);
