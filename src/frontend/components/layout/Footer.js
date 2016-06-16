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
      textAlign: "center"
    };
    const socialImg = {
      width: "30px",
      height: "30px",
      marginLeft: "10px"
    };

    return (
    <footer class="footer">
      <div class="container" style={containerStyle}>
        <a href="https://github.com/Ortee"><img src="../../assets/github.png" style={socialImg}></img></a>
        <a href="https://twitter.com/Orteeee"><img src="../../assets/twitter.png" style={socialImg}></img></a>
        <a href="https://www.linkedin.com/in/mateusz-oracz-5936a3122?trk=nav_responsive_tab_profile_pic"><img src="../../assets/linkedin.png" style={socialImg}></img></a>
      </div>
    </footer>
    );
  }
}
