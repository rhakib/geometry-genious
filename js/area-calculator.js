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
    areaSpan.innerText = area;


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