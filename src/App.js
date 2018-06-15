import React, { Component } from "react";
// import logo from "./logo.svg";
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
    highScore: 0,
  };

  runGame = (id, used) => {
    this.state.xmen.sort(() => Math.random() - 0.5);

    if (used) {
      this.gameOver();
      return;
    }
    this.state.xmen.find((element, i) => {
      if (element.id === id) {
        if (!xmen[i].used) {
          xmen[i].used = true;
          this.setState({ score: this.state.score + 1 });
        } else {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    this.state.xmen.forEach(function(xman) {
      xman.used = false;
    });
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
      this.setState({ score: 0 });

      alert("New high score acheived.\n\rHigh Score: " + this.state.score);
    } else if (this.state.score < this.state.highScore) {
      this.setState({ score: 0 });
      alert("Game over, bub.");
    }
  };
  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <div className="container">
          {this.state.xmen.map(xmen => (
            <Images
              id={xmen.id}
              key={xmen.key}
              name={xmen.name}
              image={xmen.image}
              game={this.runGame}
              used={xmen.used}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
