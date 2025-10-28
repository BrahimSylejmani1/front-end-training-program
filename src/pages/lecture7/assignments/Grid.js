import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import { Button } from "@material-ui/core";


const styles = ({ size }) => ({
    grid: {
        width: '100%',
        height: 720,
        display: 'flex',
        position: 'relative',
        flexFlow: 'row wrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    }
})

const Grid = (props) => {

    const { cols = 4, spacing = 8, classes, children } = props

    const childrenArray = React.Children.toArray(children);

    const itemWidth = `calc(${100 / cols}% - ${spacing * 2}px)`;

    return (
        <div className={classes.grid}>
            {childrenArray.map((child, index) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                        key: index,
                        style: {
                            width: itemWidth,
                            margin: spacing,
                            boxSizing: "border-box",
                        },
                    })
                    : child
            )}
        </div>
    );
};

export default withStyles(styles)(Grid)