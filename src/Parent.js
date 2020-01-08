import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: `#FFF`
    }
  }

  colorChange = (newColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color = {this.state.childrenColor} handleColorChange = {this.colorChange}/>
        <Child color = {this.state.childrenColor} handleColorChange = {this.colorChange}/>
      </div>
    )
  }
}
 
export default Parent
