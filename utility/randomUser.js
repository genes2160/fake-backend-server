exports.randomUserName = () => {
    var first_name = require('./first_name.json');
    var last_name = require('./last_name.json');
    var rA = Math.floor(Math.random()*first_name.length);
    var rB = Math.floor(Math.random()*last_name.length);
    var name = first_name[rA] +' '+ last_name[rB];
    return name;
}