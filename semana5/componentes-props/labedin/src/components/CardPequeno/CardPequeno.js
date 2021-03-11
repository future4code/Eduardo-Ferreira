import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <div>
        <div className="icon email">
          <b className="">Email: </b>
          <span>{props.email}</span>
        </div>
      </div>
      <div>
        <div className="icon endereco">
          <b className="">Endereço: </b>
          <span>{props.endereco}</span>
        </div>
      </div>
    </div>
  );
}

export default CardPequeno;
