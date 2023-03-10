import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {key1: false}

  DarkMode = () => {
    const Element = document.getElementById('inner')
    Element.style.backgroundColor = 'black'
    Element.style.color = 'white'
    this.setState({key1: false})
  }

  LightMode = () => {
    const Element = document.getElementById('inner')
    Element.style.backgroundColor = 'White'
    Element.style.color = 'Black'
    this.setState({key1: true})
  }

  clicked = () => {
    const {key1} = this.state
    if (key1) {
      return <button onClick={this.DarkMode}>Dark Mode</button>
    }
    return (
      <button className="dark1" onClick={this.LightMode}>
        Light Mode
      </button>
    )
  }

  render() {
    return (
      <div className="Bg-container">
        <div className="inner-container" id="inner">
          <h1>Click TO Change Mode</h1>
          {this.clicked()}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
