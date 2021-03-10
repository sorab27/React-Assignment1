import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    userInput: "",
    fruitsArray: [],
  };

  clickHandler = (e) => {
    e.preventDefault();
    const splitting = this.state.userInput.split("-");
    this.setState((prevState) => ({
      userInput: "",
      fruitsArray: [
        ...prevState.fruitsArray,
        { fruit: splitting[0], quantity: splitting[1] },
      ],
    }));
  };

  inputChangeHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  deleteFruit(fruit) {
    return () => {
      this.setState((prevState) => ({
        fruitsArray: prevState.fruitsArray.filter(
          (fruitItem) => fruitItem.fruit !== fruit
        ),
      }));
    };
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.clickHandler}>
          <input
            type="text"
            id="name"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
          <br />
          <button>Submit</button>
        </form>
        <table>
          <tbody>
            {this.state.fruitsArray.map((fruit) => {
              return (
                <tr key={fruit.fruit}>
                  <td>{fruit.fruit}</td>
                  <td>{fruit.quantity}</td>
                  <td>
                    <button onClick={this.deleteFruit(fruit.fruit)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
