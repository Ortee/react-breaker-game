import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { location } = this.props;
    const GameClass = location.pathname === "/" ? "active" : "";

    return (
      <div/>
    );
  }
}
