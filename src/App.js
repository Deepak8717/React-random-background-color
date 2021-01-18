import React from "react";

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      let randomBgColor = Math.floor(Math.random() * 16772215).toString(16);
      document.body.style.backgroundColor = `#${randomBgColor}`;
      console.log(randomBgColor);
    }, 500);
  }
  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
