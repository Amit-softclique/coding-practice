var http = require('http');

var data=[
    {nme: "amit", age: "20", email: "hfhf@hghg.vol"},
    {nme: "amit", age: "20", email: "hfhf@hghg.vol"},
]

http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(5000)

