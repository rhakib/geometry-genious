function calculateTriangleArea() {
    // get triangle base value 
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);
    console.log(base);

    // get height value 

    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    console.log(height);

    const area = 0.5 * base * height;

    // show triangle area

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


}

function calculateRectangleArea() {
    // get rectangle width value 
    const witdhField = document.getElementById('rectangle-width');
    const widthFieldText = witdhField.value;
    const width = parseFloat(widthFieldText);


    // get rectangle height value 

    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);


    const area = width * length;

    // show rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;


}
    // reusable function 
    function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue ('parallelogram-height');
    const area = base * height;
    setInnerText('parallelogram-area', area);
  }

  function calculateEllipseArea () {
     const major = getInputValue('ellipse-major-radius');
     const minor = getInputValue('ellipse-minor-radius');
     const area = 3.14 * major * minor;
     setInnerText('ellipse-area', area)

  }

  function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    return inputValue;

    
  }

   function setInnerText (areaId, area) {
    const element = document.getElementById(areaId);
    element.innerText = area;


   }