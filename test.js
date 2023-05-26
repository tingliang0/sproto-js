var fs = require("fs");
var sproto = require("./sproto");

var filename = "./sproto-js/protocol.spb";
var buffer = fs.readFileSync(filename);
if (buffer == null){
	console.log("read File err1");
}
console.log(sproto);

var sp = sproto.createNew(buffer);
console.log(sp);


var basicType = {
	numberList: []
}
var buffer = sp.encode("base.BasicType", basicType)
console.log(buffer)

// var new_buffer = [ 2,0,5,0,0,0,0,0,0,0 ]

var result = sp.decode("base.BasicType", buffer)
console.log(result)