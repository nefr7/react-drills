import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9KXNmpiB1VrrB5VKdQzohutBlwoHSV48_ug&usqp=CAU"} />
      </div>
    );
  }
}

export default App;
