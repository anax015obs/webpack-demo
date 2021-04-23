import React from "react";
import reactDOM from "react-dom";

const Test = ({ name }: { name: string }) => <div>{`hello ${name}!`}</div>;

reactDOM.render(<Test name="fuck" />, document.getElementById("root"));
