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
  if (targetElement.children.length <= 5) {
    // Create list element for display result on the user interface
    const li = document.createElement("li");
    li.className = "text-lg";

    // Create title span
    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;
    titleSpan.id = `${title}-result`;

    // Create area span
    const areaSpan = document.createElement("span");
    areaSpan.innerHTML = `${area}cm<sup>2</sup>`;
    areaSpan.id = `${title}-field`;

    // Create button
    const button = document.createElement("button");
    button.className = "btn btn-primary btn-sm";

    //add button id
    button.id = `${title}-meter`;

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
  } else {
    const maxElement = document.getElementById("maximum-point");
    maxElement.innerText = "Maximum point exist";
    maxElement.className = "text-red-500 text-center";
  }
};

//This function used for print error massage
const printErrorMassage = (massageFieldId) => {
  const errorMassage = document.getElementById(massageFieldId);
  errorMassage.innerText = "input not valid...";
  errorMassage.className = "text-red-500";
};

// This function used for clear input filed
const clearInputField = (fieldId) => {
  document.getElementById(fieldId).value = "";
};

//Add onclick handler to the callculate button of the Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
  // Extact base and height by clling function
  const triangleBase = takeInputValueById("triangle-base");
  const triangleHeight = takeInputValueById("triangle-height");
  if (
    Number.isNaN(triangleHeight) === false &&
    Number.isNaN(triangleBase) === false
  ) {
    // clear invalid massage
    document.getElementById("triangle-error").innerText = "";

    //callculate area of the triangle
    const areaTriangle = callculateTriangleOrPentagonArea(
      triangleBase,
      triangleHeight
    );
    console.log(areaTriangle);

    //set the result
    const triangleTitle = document.getElementById("triangle-title").innerText;
    setInnerHtml(areaTriangle, triangleTitle);

    //clear input filed
    clearInputField("triangle-base");
    clearInputField("triangle-height");
  } else {
    printErrorMassage("triangle-error");
  }
});

//Add onclick handler to the callculate button of the rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
  // Extract length and width of rectangle from input field
  const rectangleLen = takeInputValueById("rectangle-length");
  const rectanglewidth = takeInputValueById("rectangle-width");
  if (
    Number.isNaN(rectangleLen) === false &&
    Number.isNaN(rectanglewidth) === false
  ) {
    //callculate area of the rectangle
    const areaRectangle = callculateRectangleArea(rectangleLen, rectanglewidth);
    console.log(areaRectangle);

    //Set the result
    const rectangleTitle = document.getElementById("rectangle-title").innerText;
    setInnerHtml(areaRectangle, rectangleTitle);

    clearInputField("rectangle-length");
    clearInputField("rectangle-width");
  } else {
    printErrorMassage("rectangle-error");
  }
});

//Add onclick handler to the callculate button of the Parallelogram
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    //Extract Base and height of rectangle from input field
    const parallelogramBase = takeInputValueById("parallelogram-base");
    const parallelogramHeight = takeInputValueById("parallelogram-height");
    if (
      Number.isNaN(parallelogramBase) === false &&
      Number.isNaN(parallelogramHeight) === false
    ) {
      // clear error massage
      document.getElementById("parallelogram-error").innerText = "";

      //callculate area of the parallelogram
      const areaParallelogram = callculateParallelogramOrRhombusArea(
        parallelogramBase,
        parallelogramHeight
      );
      console.log(areaParallelogram);

      //set the result
      const parallelogramTitle = document.getElementById(
        "parallelogram-title"
      ).innerText;
      setInnerHtml(areaParallelogram, parallelogramTitle);

      //clear the input field of the parallelogram
      clearInputField("parallelogram-base");
      clearInputField("parallelogram-height");
    } else {
      printErrorMassage("parallelogram-error");
    }
  });

//Add onclick handler to the callculate button of the Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
  //Extract Base and height of rectangle from input field
  const rhombusBase = takeInputValueById("rhombus-base");
  const rhombusHeight = takeInputValueById("rhombus-height");

  if (
    Number.isNaN(rhombusBase) === false &&
    Number.isNaN(rhombusHeight) === false
  ) {
    //clear error massage
    document.getElementById("rhombus-error").innerText = "";

    //callculate area of the rhombus
    const areaRhombus = callculateParallelogramOrRhombusArea(
      rhombusBase,
      rhombusHeight
    );
    console.log(areaRhombus);

    //set result
    const rhombusTitle = document.getElementById("rhombus-title").innerText;
    setInnerHtml(areaRhombus, rhombusTitle);

    //clear input filed
    clearInputField("rhombus-base");
    clearInputField("rhombus-height");
  } else {
    printErrorMassage("rhombus-error");
  }
});

//Add onclick handler to the callculate button of the Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
  //Extract Base and height of rectangle from input field
  const pentagonPerimeter = takeInputValueById("pentagon-perimeter");
  const pentagonApothem = takeInputValueById("pentagon-apothem");

  if (
    Number.isNaN(pentagonPerimeter) === false &&
    Number.isNaN(pentagonApothem) === false
  ) {
    // clear error massage
    document.getElementById("pentagon-error").innerText = "";
    //callculate area of the pentagon
    const areaPentagon = callculateTriangleOrPentagonArea(
      pentagonPerimeter,
      pentagonApothem
    );
    console.log(areaPentagon);

    //set result
    const pentagonTitle = document.getElementById("pentagon-title").innerText;
    setInnerHtml(areaPentagon, pentagonTitle);

    //clear input field
    clearInputField("pentagon-perimeter");
    clearInputField("pentagon-apothem");
  } else {
    printErrorMassage("pentagon-error");
  }
});

//Add onclick handler to the callculate button of the Ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipseBase = takeInputValueById("ellipse-base");
  const ellipseHeight = takeInputValueById("ellipse-height");
  if (
    Number.isNaN(ellipseBase) === false &&
    Number.isNaN(ellipseHeight) === false
  ) {
    //clear error massage
    document.getElementById("ellipse-error").innerText = "";

    //callculate area of the ellipse
    const areaEllipse = callculateEllipseArea(ellipseBase, ellipseHeight);
    console.log(areaEllipse.toFixed(2));

    //set result
    const ellipseTitle = document.getElementById("ellipse-title").innerText;
    setInnerHtml(areaEllipse.toFixed(2), ellipseTitle);

    //clear input field
    clearInputField("ellipse-base");
    clearInputField("ellipse-height");
  } else {
    printErrorMassage("ellipse-error");
  }
});
