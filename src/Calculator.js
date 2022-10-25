import React from "react";
import "./style.css";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      temp: "",
    };
  }
  handleClick = (e) => {
    if (e.target.value == "clear") {
      this.setState({ data: "" });
    } else if (e.target.value == "C") {
      let s1 = this.state.data.toString();
      let s2 = s1.slice(0, s1.length - 1);
      this.setState({ data: s2 });
    } else if (e.target.value == "=") {
      try {
        this.setState({ data: eval(this.state.data) });
      } catch (err) {
        // this.setState({ data: "" });
        console.log(this.state.data);
      }
    } else {
      this.setState({ data: this.state.data + e.target.value });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="screen">
            <input type="text" value={this.state.data} />
          </div>
          <div className="keypad">
            <button
              value={"clear"}
              onClick={this.handleClick}
              className="clear highlight"
            >
              Clear
            </button>
            <button
              value={"C"}
              onClick={this.handleClick}
              className="highlight"
            >
              C
            </button>
            <button
              value={"/"}
              onClick={this.handleClick}
              className="highlight"
            >
              /
            </button>
            <button value={"9"} onClick={this.handleClick}>
              9
            </button>
            <button value={"8"} onClick={this.handleClick}>
              8
            </button>
            <button value={"7"} onClick={this.handleClick}>
              7
            </button>
            <button
              value={"*"}
              onClick={this.handleClick}
              className="highlight"
            >
              X
            </button>
            <button value={"6"} onClick={this.handleClick}>
              6
            </button>
            <button value={"5"} onClick={this.handleClick}>
              5
            </button>
            <button value={"4"} onClick={this.handleClick}>
              4
            </button>
            <button
              value={"-"}
              onClick={this.handleClick}
              className="highlight"
            >
              -
            </button>
            <button value={"3"} onClick={this.handleClick}>
              3
            </button>
            <button value={"2"} onClick={this.handleClick}>
              2
            </button>
            <button value={"1"} onClick={this.handleClick}>
              1
            </button>
            <button
              value={"+"}
              onClick={this.handleClick}
              className="highlight"
            >
              +
            </button>
            <button value={"0"} onClick={this.handleClick}>
              0
            </button>
            <button value={"."} onClick={this.handleClick}>
              .
            </button>
            <button
              value={"="}
              onClick={this.handleClick}
              className="equal highlight"
            >
              =
            </button>
            {/* <button></button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
