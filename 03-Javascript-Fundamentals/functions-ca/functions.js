const calculatePerimeter = (width, height) => {
    return (2 * width) + (2* height);
}

calculatePerimeter( 3, 6);

const calculateArea = (radius) => {
 console.log (Math.PI * (radius * radius));
}
calculateArea(2);

const calculateCircumference = (radius) => {
    return ( 2 * Math.PI * radius);
}
calculateCircumference(2);