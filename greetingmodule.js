var textMsg = '{insert name here}';
exports.textMsg = textMsg;

var greeting = function(msg){
    return msg.concat(' from ').concat(textMsg);
}
exports.greeting = greeting;

// var magicNumber = function magicNumber() {
//     var f = 42;
//     return f;
// }

// exports.magicNumber = magicNumber;
