import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Images from "./components/images/Images";
// import Footer from "./components/Footer";
import xmen from "./components/images/images.json";

class App extends Component {
  state = {
    xmen,
    score: 0,
  };

  runGame = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(xmen.id);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
        <div className="container">
          {this.state.xmen.map(xmen => (
            <Images
              id={xmen.id}
              key={xmen.key}
              name={xmen.name}
              image={xmen.image}
              game={this.runGame}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
