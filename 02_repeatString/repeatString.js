const repeatString = function(string, num) {
    let newstring = "";
    if (num < 0)
        return "ERROR";
    for (i = 0; i < num; i++) {
        newstring += string;
    }

    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
