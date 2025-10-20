/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from "react"

export const Italic = (props) => {
  return <label style={{display: 'contents', fontStyle: 'italic', paddingLeft: 4, paddingRight: 4, ...props.style}}>{props.children}</label>
}

export const BoldItalic = (props) => {
  return <label style={{display: 'contents', fontWeight: 'bold', fontStyle: 'italic', paddingLeft: 4, paddingRight: 4, ...props.style}}>{props.children}</label>
}

export const Bold = (props) => {
  return <label style={{display: 'contents', fontWeight: 'bold', paddingLeft: 4, paddingRight: 4, ...props.style}}>{props.children}</label>
}

export const Normal = (props) => {
  return <label style={{display: 'contents', paddingLeft: 4, paddingRight: 4, ...props.style}}>{props.children}</label>
}

const Label = ({variant, ...other}) => {
  switch (variant) {
    case 'bold':
      return Bold(other)
    case 'normal':
      return Normal(other)
    case 'italic':
      return Italic(other)
    case 'bold_italic':
      return BoldItalic(other)
  }
}

export default Label
