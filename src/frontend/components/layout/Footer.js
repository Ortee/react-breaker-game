import React from "react";
import { IndexLink, Link } from "react-router";

export default class Footer extends React.Component {
  render() {
    const containerStyle = {
      bottom:"0",
      position: "absolute",
      padding: "1rem",
      width:"100%",
      backgroundColor: "#efefef",
      textAlign: "center",
    };
    return (
    <footer class="footer">
      <div class="container" style={containerStyle}>
        <p class="text-muted">Orteedev.</p>
      </div>
    </footer>
    );
  }
}
