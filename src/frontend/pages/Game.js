import React from "react";
import { Button } from "./Button";
import { Blocks } from "./Blocks";
import { Ball } from "./Ball";
import { connect } from 'react-redux'

export default class Game extends React.Component {
  constructor(){
    super();

  }
  render(){
    return (
      <div>
        <Blocks></Blocks>
        <Ball ></Ball>
        <Button dispatch={this.props.dispatch}></Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
 }
 export default connect(mapStateToProps)(Game)
