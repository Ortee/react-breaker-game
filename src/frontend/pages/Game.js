import React from "react";
import { Button } from "./Button";
import { Blocks } from "./Blocks";
import { Ball } from "./Ball";

export default class Game extends React.Component {
  constructor(){
    super();

  }
  render(){
    return (
      <div>
        <Blocks></Blocks>
        <Ball></Ball>
        <Button></Button>
      </div>
    );
  }
}
