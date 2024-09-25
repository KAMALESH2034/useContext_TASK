import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-2 pb-2">
          <div className="col">TOTAL QTY: <span style={{color : "blue" , fontSize: "bold"}}>{cardQuantity}</span></div>
          <div className="col">TOTAL Price :<span style={{color : "red" , fontSize: "bold"}}> { (cardAmount).toFixed(2)}</span></div>
          <div className="col-auto">
            <button className="btn btn-outline-primary">Proceed to pay</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;