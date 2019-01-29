import React, { Component } from "react"
import axios from "axios"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "Not set" }
  }
  componentDidMount() {
    axios.get("/api/message").then(response => {
      this.setState({ message: response.data })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React App with Express</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.message}
          </a>
        </header>
      </div>
    )
  }
}

export default App
