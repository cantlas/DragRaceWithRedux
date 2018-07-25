import React from "react";

let BattleResults = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.challenger.name} shante you stay.</h1>
      <h1>{props.competitor.name} sashay away.</h1>
    </div>
  );
};

export default BattleResults;
