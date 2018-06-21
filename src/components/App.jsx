import React, { Component } from 'react';
import '../App.css';
import  ListMessages  from './ListMessages';

class App extends Component {

  state = {
    username: 'jakeberg',
    password: "123456",
    displayName: 'JakeBerg',
    messages: [],
  };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          messages: response.messages,
        });
      }
      );
  }

  handleRegistration = () => {
    fetch("https://kwitter-api.herokuapp.com/auth/register",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          displayName: this.state.displayName,
        }),
      })
      .then(response => response.json())
      .then(myJson =>
        console.log(myJson)
      );
  }

  handleLogin = () => {
    fetch("https://kwitter-api.herokuapp.com/auth/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
      .then(response => response.json())
      .then(myJson =>
        console.log(myJson)
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <div className="App-title">
              <h1> Kwitter </h1>
            </div>
          </div>
          <section>
            <button onClick={this.handleRegistration}>Click for Registration</button>
            <button onClick={this.handleLogin}>Click for Login</button>
            <ListMessages messages={this.state.messages} />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;