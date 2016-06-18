import React from "react";

export class Ball extends React.Component {
  constructor(){
    super();
    this.state = {
      ball: {
        y:      0,
        x:      0,
        width:  100,
        height: 100,
        speedX: 4,
        speedY: 4
      },
      button: {
        x:      0,
        y:      0,
        width:  0,
        height: 0
      },
      bounce: {
        left:   false,
        right:  false,
        up:     false,
        down:   false
      },
      gameWindow: {
        width:  window.innerWidth,
        higth:  window.innerHeight
      }
    }
  }

  updateScreenSize(){
    let _gameButton = document.getElementById('gameButton').style.transform;
    let _gameButtonWidth = document.getElementById('gameButton').style.width;
    let _gameButtonHeight = document.getElementById('gameButton').style.height;

    this.setState({
      gameWindow: Object.assign({}, this.state.gameWindow, { width: window.innerWidth, height: window.innerHeight }),
      button: Object.assign({}, this.state.button, { width: _gameButtonWidth, height: _gameButtonHeight, x: parseInt(_gameButton.replace("translateX(",""))}),
    });
  }

  componentDidMount() {
    setInterval(this.movement.bind(this), 1);
    setInterval(this.updateScreenSize.bind(this), 1);
  }

  componentWillMount() {
    this.setState({
      ball: Object.assign({}, this.state.ball, { x: 0, y: 0 })
    });
  }

  movement(){
    let {ball, gameWindow, button, bounce } = this.state;

    if(bounce.down === false && ( ball.y + 100 ) > gameWindow.height - 340 && button.x - ball.x > -250 && button.x - ball.x < 50)
    {
      console.log('BOUNCE');
      this.setState({
        ball: Object.assign({}, this.state.ball, { speedY: this.state.ball.speedY * (-1) }),
        bounce: Object.assign({}, this.state.bounce, { down: true, up: false, right: false, left: false })
      });
    }

    if( bounce.left === false && ball.x + 100 > gameWindow.width)
    {
      this.setState({
        ball: Object.assign({}, this.state.ball, { speedX: this.state.ball.speedX * (-1) }),
        bounce: Object.assign({}, this.state.bounce, { down: false, up: false, right: false, left: true })
      });
    }

    if( bounce.right === false && ball.x -100 < -100)
    {

      this.setState({
        ball: Object.assign({}, this.state.ball, { speedX:this.state.ball.speedX * (-1) }),
        bounce: Object.assign({}, this.state.bounce, { down: false, up: false, right: true, left: false })
      });
    }

    if( bounce.up === false && (ball.y - 100) < -350)
    {
      this.setState({
        ball: Object.assign({}, this.state.ball, { speedY: this.state.ball.speedY * (-1) }),
        bounce: Object.assign({}, this.state.bounce, { down: false, up: true, right: false, left: false })
      });
    }

    if( bounce.down === false && ( ball.y + 100 ) > gameWindow.height - 300)
    {
      console.log("LOSE");
      this.setState({
        ball: Object.assign({}, this.state.ball, { speedX: 0, speedY: 0 }),
        bounce: Object.assign({}, this.state.bounce, { down: true, up: false, right: false, left: false })
      });
    }

    this.setState({
      ball: Object.assign({}, this.state.ball, { x: this.state.ball.x + this.state.ball.speedX, y: this.state.ball.y + this.state.ball.speedY })
    });
  }
  render(){
    let {ball, gameWindow, button, bounce} = this.state;
    let ballStyle = {
      border: "1px solid",
      width: ball.width + "px",
      height: ball.height + "px",
      borderRadius: "50%",
      backgroundImage: "url('../assets/reactimg.png')",
      backgroundSize: ball.width + "px " + ball.height + "px",
      WebkitTransform: `translate(${ ball.x } px, ${ ball.y } px)`,
    }
    return (
      <div style={ballStyle}>
      </div>
    );
  }
}
