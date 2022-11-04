import React from "react";
import { Loading } from "./SadBar.styles";
import sadBar from "../../images/sad-bar.gif";

function SadBar() {
  return (
    <Loading>
      <img src={sadBar} alt="sad" />
    </Loading>
  );
}

export default SadBar;
