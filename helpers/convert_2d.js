function twoDimensional(array, row) {
    let newArray = [];
    let arraySize = Math.floor(array.length / row);
    let extraArraySize = array.length % row;
    while (array.length) {
        if (!!extraArraySize) {
            newArray.push(array.splice(0, arraySize + 1));
            extraArraySize--;
        } else {
            newArray.push(array.splice(0, arraySize));
        }
    }
    return newArray;
}



module.exports = { twoDimensional }
