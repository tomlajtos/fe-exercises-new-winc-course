import { Component } from "react";
import { useState } from "react";

export class ToggleOld extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    this.props.changeOnClick(!this.props.logoR);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export const Toggle = ({ logoR, changeOnClick }) => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
    changeOnClick(!logoR);
  };
  return (
    <button type="button" onClick={() => handleClick()}>
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
};
