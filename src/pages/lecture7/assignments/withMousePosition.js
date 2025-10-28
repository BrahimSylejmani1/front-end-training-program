import React from "react";

const withMousePosition = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { x: 0, y: 0 };
        }

        componentDidMount() {
            window.addEventListener("mousemove", this.handleMouseMove);
        }

        componentWillUnmount() {
            window.removeEventListener("mousemove", this.handleMouseMove);
        }

        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    x={this.state.x}
                    y={this.state.y}
                />
            );
        }
    };
};

export default withMousePosition;
