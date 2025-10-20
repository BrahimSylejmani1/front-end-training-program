/**
 * Created by Agon Lohaj on 19/04/2019.
 */
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import echarts from 'echarts';
import React from 'react';

const styles = {
  chartWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex'
  }
}
/**
 * Chart Component
 */
class Chart extends React.Component {

  constructor(props) {
    super(props)
    /**
     * the chart used to display the data
     */
    this.chart = null
  }

  /**
   * init the chart ({@link LineChart#init}) and resize event listener
   */
  componentDidMount() {
    this.init()
    this.setOption()
  }

  componentDidUpdate(prevProps, prevState) {
    this.setOption()
  }

  /**
   * on component unmount dispose the chart ({@link LineChart#dispose})
   */
  componentWillUnmount() {
    this.dispose()
  }

  /**
   * init the chart and set chart options ({@link LineChart#setOption})
   */
  init() {
    this.chart = echarts.init(this.refs.container)
    if (this.props.onInit) {
      this.props.onInit(this.chart)
    }
  }

  setOption() {
    const { options, onOptionsChanged } = this.props
    if (!options) {
      if (this.chart) {
        this.chart.clear()
      }
      return
    }
    const padding = 32
    const graph = {
      ...options,
      grid: {
        left: padding,
        right: padding,
        top: padding,
        bottom: padding
      },
      tooltip: {
        show: true
      }
    }
    // TODO: test and remove this option in the future
    // this.chart.clear()
    try {
      this.chart.setOption(graph, true)
    } catch (e) {
      console.log('error setting options')
      console.log(e)
    }
    if (onOptionsChanged) {
      onOptionsChanged()
    }
  }

  /**
   * clear the chart resources
   */
  dispose() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  }

  render() {
    let { style, classes, children, className: classNameProp } = this.props
    return (
      <div className={classNames(classes.chartWrapper, classNameProp)} style={style}>
        <div className={classes.chartWrapper} ref={'container'} />
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Chart)
