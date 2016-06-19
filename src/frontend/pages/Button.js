import React from "react";

export class Button extends React.Component {
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
      buttonColor: "black"
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
    let windowWidth = this.state.windowSize;
    if(windowWidth>1400)
    {
      this.setState({
        buttonColor: "black",
        buttonWidth: 250,
        buttonHigth: 50
      })
    } else if(windowWidth<1400 && windowWidth>1100) {
      this.setState({
        buttonColor: "grey",
        buttonWidth: 200,
        buttonHigth: 40

      })
    } else if(windowWidth<1100 && windowWidth>800) {
      this.setState({
        buttonColor: "red",
        buttonWidth: 150,
        buttonHigth: 35
      })
    } else if(windowWidth<800 && windowWidth>600) {
      this.setState({
        buttonColor: "orange",
        buttonWidth: 100,
        buttonHigth: 30
      })
    } else if(windowWidth<600 && windowWidth>300) {
      this.setState({
        buttonColor: "yellow",
        buttonWidth: 50,
        buttonHigth: 25
      })
    }
    this.setState({
      mouseX: (this.state.windowSize-this.state.buttonWidth)/2
    });
  }

  updateScreenSize(){
    this.setState({
      windowSize: window.innerWidth
    });
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
        if(windowSize-buttonWidth-10>buttonX || toTheRight===false)
        {
          this.setState({
            buttonX: mouseX,
          });
        }
  }
  render() {
    let {speed, accelMod, buttonX, buttonWidth, buttonHigth, mouseX, toTheRight, windowSize, buttonColor} = this.state;
    const buttonStyle = {
      width:    buttonWidth+"px",
      height:   buttonHigth+"px",
      bottom:   50,
      position: "absolute",
      border:   "5px solid",
      WebkitTransform: `translateX(${buttonX}px)`,
      backgroundColor: buttonColor
    };
    return (
      <div id="gameButton" style={buttonStyle}>
      </div>
    );
  }
}
