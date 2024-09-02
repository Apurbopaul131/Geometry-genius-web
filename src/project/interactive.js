//Add onclick handler to the callculate button of the Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
  // Extact base and height by clling function
  const triangleBase = takeInputValueById("triangle-base");
  const triangleHeight = takeInputValueById("triangle-height");

  //callculate area of the triangle
  const areaTriangle = callculateTriangleOrPentagonArea(
    triangleBase,
    triangleHeight
  );
  console.log(areaTriangle);

  //set the result
  const triangleTitle = document.getElementById("triangle-title").innerText;
  setInnerHtml(areaTriangle, triangleTitle);
});

//Add onclick handler to the callculate button of the rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
  // Extract length and width of rectangle from input field
  const rectangleLen = takeInputValueById("rectangle-length");
  const rectanglewidth = takeInputValueById("rectangle-width");

  //callculate area of the rectangle
  const areaRectangle = callculateRectangleArea(rectangleLen, rectanglewidth);
  console.log(areaRectangle);

  //Set the result
  const rectangleTitle = document.getElementById("rectangle-title").innerText;
  setInnerHtml(areaRectangle, rectangleTitle);
});

//Add onclick handler to the callculate button of the Parallelogram
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    //Extract Base and height of rectangle from input field
    const parallelogramBase = takeInputValueById("parallelogram-base");
    const parallelogramHeight = takeInputValueById("parallelogram-height");

    //callculate area of the parallelogram
    const areaParallelogram = callculateParallelogramOrRhombusArea(
      parallelogramBase,
      parallelogramHeight
    );
    console.log(areaParallelogram);
  });

//Add onclick handler to the callculate button of the Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
  //Extract Base and height of rectangle from input field
  const rhombusBase = takeInputValueById("rhombus-base");
  const rhombusHeight = takeInputValueById("rhombus-height");

  //callculate area of the rhombus
  const areaRhombus = callculateParallelogramOrRhombusArea(
    rhombusBase,
    rhombusHeight
  );
  console.log(areaRhombus);
});

//Add onclick handler to the callculate button of the Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
  //Extract Base and height of rectangle from input field
  const pentagonPerimeter = takeInputValueById("pentagon-perimeter");
  const pentagonApothem = takeInputValueById("pentagon-apothem");

  //callculate area of the pentagon
  const areaPentagon = callculateTriangleOrPentagonArea(
    pentagonPerimeter,
    pentagonApothem
  );
  console.log(areaPentagon);
});

//Add onclick handler to the callculate button of the Ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipseBase = takeInputValueById("ellipse-base");
  const ellipseHeight = takeInputValueById("ellipse-height");
  const areaEllipse = callculateEllipseArea(ellipseBase, ellipseHeight);
  console.log(areaEllipse.toFixed(2));
});

// This function take id as a parameter and extract value from the input field
const takeInputValueById = (inputFeildId) => {
  const inputElement = document.getElementById(inputFeildId);
  const inputText = inputElement.value;
  const inputNumber = parseFloat(inputText);
  return inputNumber;
};

// This function callculate Area of the triangle or pentagon
const callculateTriangleOrPentagonArea = (base, height) => {
  const triangleArea = 0.5 * base * height;
  return triangleArea;
};

// This function callculate Area of the rectangle
const callculateRectangleArea = (len, width) => {
  const rectangleArea = 2 * len * width;
  return rectangleArea;
};

// This function callculate area of the Parallelogram or rhombus area
const callculateParallelogramOrRhombusArea = (base, height) => {
  const parallelogramArea = base * height;
  return parallelogramArea;
};

//This function callculat area of the Ellipse
const callculateEllipseArea = (base, height) => {
  const ellipseArea = Math.PI * base * height;
  return ellipseArea;
};

//set inner html of the element
const setInnerHtml = (area, title) => {
  const targetElement = document.getElementById("ordered-list");

  // Create list element for display result on the user interface
  const li = document.createElement("li");
  li.className = "text-lg";

  // Create title span
  const titleSpan = document.createElement("span");
  titleSpan.textContent = title;

  // Create area span
  const areaSpan = document.createElement("span");
  areaSpan.innerHTML = `${area}cm<sup>2</sup>`;

  // Create button
  const button = document.createElement("button");
  button.className = "btn btn-primary btn-sm";

  // Create button text
  const buttonText = document.createElement("span");
  buttonText.innerHTML = "convert m<sup>2</sup>";

  // Append button text to button
  button.appendChild(buttonText);

  // Append title, area, and button to li
  li.appendChild(titleSpan);
  li.appendChild(areaSpan);
  li.appendChild(button);

  // Append the list item to the ordered list
  targetElement.appendChild(li);
};
