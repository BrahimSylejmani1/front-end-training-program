import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import IconButton from '@material-ui/core/IconButton'
import Clear from '@material-ui/icons/Clear'
import React, { Fragment } from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const cardStyles = ({ typography, size, palette, shadows }) => ({
	container: {
		width: '100%',
		display: 'flex',
		height: 600,
		padding: size.spacing,
		borderRadius: size.spacing,
		backgroundColor: '#CFD8DC'
	},
	root: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignContent: 'flex-start',
		padding: size.spacing * 2,
		width: 400,
		height: 200,
		borderRadius: size.spacing,
		backgroundColor: palette.leadColor,
		color: '#fff',
		boxShadow: shadows[5]
	},
	header: {
		height: 60,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	content: {
		width: '100%',
		flexGrow: 1,
		overflowY: 'auto'
	},
	cardHeader: {
		'& svg': {
			color: '#fff'
		}
	}
})

const Card = props => {
	const { className: classNameProp, classes } = props
	const className = classNames(
		classes.root,
		classNameProp
	)
	return (
		<div className={className}>
			<div className={classes.header}>
				<span>Header</span>
				<IconButton><Clear /></IconButton>
			</div>
			<div className={classes.content}>
				Loerm ispum Dolore sit amet and some more dummy text
				just tu fill up the content, lorem ipsume more from the other side of our planet and beyond
				to ipsum lorem dous moustequis and valar morghulis.
            </div>
		</div>
	)
}
const CardWithClassNames = withStyles(cardStyles)(Card)


const exerciseStyles = ({ typography, size, palette, shadows }) => ({
	root: {
		width: '100%',
		display: 'flex',
		height: 600,
		padding: size.spacing,
		borderRadius: size.spacing,
		backgroundColor: '#CFD8DC'
	},
	cardHeader: {
		'& svg': {
			color: '#fff'
		}
	}
})
class Exercise extends React.Component {

	render() {
		const { className: classNameProp, classes } = this.props

		const className = classNames(
			classes.root,
			classNameProp
		)
		return (
			<div className={className}>
				<CardWithClassNames classes={{
					header: classes.cardHeader
				}} />
			</div>
		)
	}
}

export default withStyles(exerciseStyles)(Exercise)