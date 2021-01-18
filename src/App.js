import React from "react";

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      let randomBgColor = Math.floor(Math.random() * 15673879).toString(16);
      document.body.style.backgroundColor = `#${randomBgColor}`;
      document.body.style.transition = "1s ease";
      console.log(randomBgColor);
    }, 10000);
  }
  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
