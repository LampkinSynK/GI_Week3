sharePizza = (slices, people) => {
    divSlices = slices/people;
    return `Each person gets ${divSlices} slices of our ${slices} pizza`;
}

console.log(sharePizza(10,3));