import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor(props){
    super()
    this.state = {
      color: props.color
    } 
  }
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        onClick = {() => this.props.handleColorChange(getRandomColor())}
      ></div>
    )
  }
}

export default Child
