import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (

      // <div onClick={this.props.handleChangeColor(getRandomColor())}

      // Since we are passing data from the child back up to the parent, we need to change the function call into an anonymous function in order to have React call it once. Otherwise, it would call it definitely/ keep re-rendering reaching a maxium stack exceding

      // We can also put this in a separate method:
      // handleChangeClick = () => {
      //   this.props.handleChangeColor(getRandomColor())
      // }


      <div onClick={() =>this.props.handleChangeColor(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
