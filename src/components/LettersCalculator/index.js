// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, value: ''}

  onChangeInputPhrase = event => {
    this.setState({value: event.target.value})
  }

  getValue = () => {
    const {value} = this.state
    if (value !== '') {
      this.setState({count: value.length})
    }
  }

  render() {
    const {value} = this.state
    console.log(value)

    return (
      <div className="main-container">
        <div className="container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="para-input-details">
              <label className="para" htmlFor="textDetails">
                Enter the phrase
              </label>
              <input
                id="textDetails"
                className="input-details"
                placeholder="Enter the Phrase"
                onChange={this.onChangeInputPhrase}
                type="text"
              />
            </div>
            <p className="letter-count">No.of letters: {value.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="calculator-img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
