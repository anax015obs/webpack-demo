// import "./style.css";
import SadPepe from "./sad-pepe.png";
import _ from "lodash";
import print from "./print";

const getComponent = async () => {
  console.log(_.join(["get component..."]));
  const element = document.createElement("div");
  element.innerHTML = "Hello webpack! v8";
  element.classList.add("hello");

  const img = new Image();
  img.src = SadPepe;

  const button = document.createElement("button");
  button.innerHTML = "Click me and check the console!";
  button.addEventListener("click", async () => {
    await import("antd");
    print();
  });

  element.appendChild(img);
  element.appendChild(button);
  return element;
};

getComponent().then((component) => {
  document.body.appendChild(component);
});
