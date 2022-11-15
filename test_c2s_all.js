var fs = require("fs");
var sproto = require("./sproto");
var utils = require("./utils");

var filename = "./c2s_all.spb";
var buffer = fs.readFileSync(filename);
if (buffer == null){
	console.log("read File err1");
}
console.log(sproto);

let server = sproto.createNew(buffer);
let serverHost = server.host("Package");
let serverSender = serverHost.attach(server);

let client = sproto.createNew(buffer);
let clientHost = client.host("Package");
let clientSender = clientHost.attach(client);

var sp = sproto.createNew(buffer);
console.log(sp);


// 客户端请求应答流程
{

    // 1. 客户端传输数据给服务器
    let buffer = clientSender("GetUserInfo",null, 1);

    // console.log(buffer);
    // 2. 服务端接收处理数据, 再返回数据给客户端
    let ret = serverHost.dispatch(buffer);
    console.log(ret);
    console.log("==========================");
    buffer = ret.responseFunc({userInfo : { nickname: "先知比利", id: "123", gold: 4294967, test_double : 1999999999.321 }});

    // 3. 客户端接收服务器的返回数据
    ret = clientHost.dispatch(buffer);
    console.log(ret);
}
