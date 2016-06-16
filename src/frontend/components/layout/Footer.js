import React from "react";
import { IndexLink, Link } from "react-router";

export default class Footer extends React.Component {
  render() {
    const containerStyle = {
      paddingTop: "60px"
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
