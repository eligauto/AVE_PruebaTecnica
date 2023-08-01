function arrayAnalysis(arr) {
    let numElements = arr.length;

    let numEven = arr.filter(x => x % 2 === 0).length;
    let percentEven = (numEven / numElements) * 100;

    let numOdd = numElements - numEven;
    let percentOdd = (numOdd / numElements) * 100;

    let numOver1000 = arr.filter(x => x > 1000).length;
    let percentOver1000 = (numOver1000 / numElements) * 100;

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / numElements;

    let percentMin = (min / max) * 100;
    let percentAvg = (avg / max) * 100;

    return {
        numElements,
        percentEven,
        percentOdd,
        percentOver1000,
        max,
        min,
        percentMin,
        percentAvg
    };
}


module.exports = {
    arrayAnalysis
};