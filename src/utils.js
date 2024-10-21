export const updateStackIcon = (obj, element, color) => {
  const stackIcons = {
    Html: "html",
    Css: "css",
    Js: "js"
  };
  obj.iconStack.src = `./assets/icons/${stackIcons[element.stack]}_${color}.png`;
};

export const updateArrowsVisibility = (obj, actualIndex, arrayLength) => {
  obj.leftArrow.style.visibility = actualIndex === 0 ? "hidden" : "visible";
  obj.rightArrow.style.visibility = actualIndex === arrayLength - 1 ? "hidden" : "visible";
};
