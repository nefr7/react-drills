import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['Shirts', 'Shorts', 'Shoes']
    }
  }

  render() {
    let newArr = this.state.arr.map((element, index) => {
      return <h1 key={index}>{element}</h1>
    })

    return (
      <div className="App">
        {newArr}
      </div>
    );
  }
}

export default App;