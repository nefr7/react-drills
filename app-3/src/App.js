import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: '',
      arr: ['VALORANT', 'League of Legends', 'VA11HALLA', 'Apex Legends']
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter })
  }

  render() {
    let newArr = this.state.arr
      .filter((element, index) => {
        return element.includes(this.state.filterString)
      })
      .map((element, index) => {
        return <h1 key={index}>{element}</h1>
      })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {newArr}
      </div>
    );
  }
}

export default App;