import React from "react";

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
           buttonX: 0,
           buttonWidth: 250,
           buttonHigth: 50,
           mouseX: 0,
           toTheRight: true,
           speed: 2,
           accelMod: 1,
           windowSize: window.innerWidth,
       }
    }

  handleMouseMove(event) {
      this.setState({
          mouseX: event.pageX
      })
  }

  componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
        setInterval(this.updateScreenSize.bind(this), 1);
}

  componentWillUnmount() {
       document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  componentWillMount() {
      this.setState({
          mouseX: (this.state.windowSize-this.state.buttonWidth)/2
      });
  }

  updateScreenSize(){
    this.setState({
        windowSize: window.innerWidth
    });
    console.log("update");
  }

  movement(){
    let {speed, accelMod, buttonX, buttonWidth, buttonHigth, mouseX, toTheRight, windowSize }= this.state;
        if(mouseX<buttonX)
        {
          this.setState({
            toTheRight: false
          });
        } else {
          this.setState({
            toTheRight: true
          });
        }
        if(windowSize-buttonWidth-5>buttonX || toTheRight===false)
        {
          this.setState({
            buttonX: mouseX,
          });
        }
  }
  render() {
    let {speed, accelMod, buttonX, buttonWidth, buttonHigth, mouseX, toTheRight, windowSize} = this.state;
    const buttonStyle = {
      width: buttonWidth+"px",
      height: buttonHigth+"px",
      position:"absolute",
      border:"5px solid",
      WebkitTransform: `translateX(${buttonX}px)`
    };
    return (
      <div style={buttonStyle}>
      </div>
    );
  }
}
