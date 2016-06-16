import React from "react";
export class Blocks extends React.Component {
  constructor(){
    super();

  }
  render(){
    let blocksStyle={
      backgroundColor:"grey",
      width:"100%",
      height:"250px"
    };
    return (
      <div style={blocksStyle}>
      </div>
    );
  }
}
