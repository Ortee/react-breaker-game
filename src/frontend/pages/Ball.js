import React from "react";

export class Ball extends React.Component {
  constructor(){
    super();
    this.state = {
      ballY: 0,
      ballX: 0,
      ballWidth: 100,
      ballHigth: 100,
      speed: 2,
      accelMod: 1,
      windowWidth: window.innerWidth,
      windowHigth: window.innerHeight
    }

  }

  updateScreenSize(){
    this.setState({
      windowWidth: window.innerWidth,
      windowHigth: window.innerHeight
    });
  }

  componentDidMount() {
    setInterval(this.movement.bind(this), 1);
    setInterval(this.updateScreenSize.bind(this), 1);
  }

  componentWillMount() {
    this.setState({
      ballX: (this.state.windowWidth)/2,
      ballY: (this.state.windowHigth)/100
    });
  }

  movement(){
    let {speed, accelMod, ballX, ballY, ballWidth, ballHigth, windowWidth }= this.state;
    this.setState({
      ballX: ballX+speed,
    });
  }
  render(){
    let {speed, accelMod, ballX, ballY, ballWidth, ballHigth, windowWidth} = this.state;
    let ballStyle={
      backgroundColor:"orange",
      width: ballWidth+"px",
      height: ballHigth+"px",
      borderRadius: "50%",

      WebkitTransform: `translate(${ballX}px, ${ballY}px)`,
    }
    return (
      <div style={ballStyle}>

      </div>
    );
  }
}
