/**
 * Created by Agon on 31/08/2017.
 */
import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'
const ArrowDropDown = (props) => {
  return (
    <SvgIcon {...props} viewBox='0 0 30 30'>
      <g>
        <path d="M14.6,20l-8.3-8.3c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4L7.2,10c0.1-0.1,0.3-0.2,0.4-0.2S7.9,9.9,8,10l7,7l7-7
		c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l0.9,0.9c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1-0.1,0.3-0.2,0.4L15.4,20
		c-0.1,0.1-0.3,0.2-0.4,0.2C14.9,20.2,14.7,20.1,14.6,20z"/>
      </g>
    </SvgIcon>
  )
}

export default ArrowDropDown