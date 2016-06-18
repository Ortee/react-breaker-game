import React from "react";

export class Ball extends React.Component {
  constructor(){
    super();
    this.state = {
      ballY: 0,
      ballX: 0,
      ballWidth: 100,
      ballHigth: 100,
      accelMod: 1,
      windowWidth: window.innerWidth,
      windowHigth: window.innerHeight,
      speedX: 4,
      speedY: 4,
      odbicieLeft: false,
      odbicieRight: false,
      odbicieUp: false,
      odbicieDown: false,
      gameButtonX: 0
    }

  }

  updateScreenSize(){
    let gameButton = document.getElementById('gameButton').style.transform;
    this.setState({
      windowWidth: window.innerWidth,
      windowHigth: window.innerHeight,
      gameButtonX: parseInt(gameButton.replace("translateX(",""))
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
    let {speed,speedX,speedY,odbicieLeft,odbicieRight,odbicieUp,odbicieDown, accelMod, ballX, ballY, ballWidth, ballHigth, windowWidth, windowHigth, gameButtonX } = this.state;

    if(odbicieDown===false && (ballY+100)>windowHigth-340 && gameButtonX-ballX>-250 && gameButtonX-ballX<50)
    {
      console.log('BOUNCE');
      this.setState({
        speedY: speedY * (-1),
        odbicieDown: true,
        odbicieLeft: false,
        odbicieRight: false,
        odbicieUp: false,
      });
    }
    if(odbicieLeft===false && ballX+100>windowWidth)
    {
      this.setState({
        speedX: speedX * (-1),
        odbicieLeft: true,
        odbicieRight: false,
        odbicieUp: false,
        odbicieDown: false
      });
    }
    if(odbicieRight===false && ballX-100<-100)
    {
      this.setState({
        speedX: speedX * (-1),
        odbicieRight: true,
        odbicieLeft: false,
        odbicieUp: false,
        odbicieDown: false
      });
    }
    if(odbicieUp===false && (ballY-100)<-350)
    {
      this.setState({
        speedY: speedY * (-1),
        odbicieUp: true,
        odbicieLeft: false,
        odbicieRight: false,
        odbicieDown: false
      });
    }
    if(odbicieDown===false && (ballY+100)>windowHigth-300)
    {
      console.log("LOSE");
      this.setState({
        speedX: 0,
        speedY: 0,
        odbicieDown: true,
        odbicieLeft: false,
        odbicieRight: false,
        odbicieUp: false,
      });
    }
    this.setState({
      ballX: ballX+speedX,
      ballY: ballY+speedY
    });

  }
  render(){
    let {speed, accelMod, ballX, ballY, ballWidth, ballHigth, windowWidth, gameButtonX} = this.state;
    let ballStyle = {
      border: "1px solid",
      width: ballWidth+"px",
      height: ballHigth+"px",
      borderRadius: "50%",
      backgroundImage: "url('../assets/reactimg.png')",
      backgroundSize: ballWidth+"px "+ballHigth+"px",
      WebkitTransform: `translate(${ballX}px, ${ballY}px)`,
    }

    return (
      <div style={ballStyle}>

      </div>
    );
  }
}
