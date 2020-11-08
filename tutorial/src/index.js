import React from "react";
import ReactDom from "react-dom";

/* *******************************************************
let Greeting = () => {
  return (
    <div>
      <Name />
      <Address />
      <Contact />
    </div>
  );
};

const Name = () => {
  return <h1>John Doe</h1>;
};
const Address = () => {
  return <h4>21 - B, Suite 403, MI</h4>;
};
const Contact = () => {
  return <h5> (+91) - 9XXX0XXXXX</h5>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));


**********************************************************************/

let Greeting = () => {
  return (
    <div>
      <Name />
      <Address />
      <Contact />
    </div>
  );
};

const Name = () => {
  return <h1>John Doe</h1>;
};
const Address = () => {
  return <h4>21 - B, Suite 403, MI</h4>;
};
const Contact = () => {
  return <h5> (+91) - 9XXX0XXXXX</h5>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
