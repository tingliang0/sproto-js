var fs = require("fs");
var sproto = require("./sproto");
var filename = "./protocol_test.spb";

var buffer = fs.readFileSync(filename);
if (buffer == null){
	console.log("read File err1");
}
console.log(sproto);

var sp = sproto.createNew(buffer);
console.log(sp);

var req = {
	protoid : 4355,
	roomproxy : "brsgong",
    // session : 5,
    // int_ids : [1, 2, 3, 4, 5],
    // string_ids : ["aaa", "bbb", "ccc"],
    // int_struct : {
    //     id : 1003,
    //     socres : [1, 1, 1],
    // },
    // repeat_structs : [
    //     {id : 1003, socres : [1, 1, 1], },
    //     {id : 1004, socres : [2, 2, 2], },
    //     {id : 1005, socres : [3, 3, 3], },
    //     {id : 1006, socres : [4, 4, 4], },
    // ],
    // map_structs : [
    //     {id : 1, socres : [1, 1, 1], },
    //     {id : 2, socres : [2, 2, 2], },
    //     {id : 3, socres : [3, 3, 3], },
    //     {id : 4, socres : [4, 4, 4], },
    // ],
    float_id : 100.03,
    //image : "\0x01\0x03\0x04",
}

var binary = sp.encode("Package", req);
console.log(binary);
// var data = sp.decode("Package", binary);
// console.log(data);

var pack_binary = sp.pack(binary);
console.log(pack_binary);

var unpack_binary = sp.unpack(pack_binary);
console.log(unpack_binary);

var data = sp.decode("Package", unpack_binary);
console.log(data);
