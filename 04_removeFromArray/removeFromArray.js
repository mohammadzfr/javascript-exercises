//NEEDED HELP

const removeFromArray = function(array, ...remove) {
    newArr = []
    array.forEach(item => {
        if (!remove.includes(item)) {
            newArr.push(item);
        }
    });
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
