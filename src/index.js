import _ from "lodash";
import "./style.css";
import SadPepe from "./sad-pepe.png";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack!"], " ");
  element.classList.add("hello");

  const img = new Image();
  img.src = SadPepe;
  element.appendChild(img);
  return element;
};

document.body.appendChild(component());
