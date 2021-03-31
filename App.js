const http=require('http');

var dt=require('./Myfirstmodule')

http.createServer(function(req,res) {
    res.writeHead(400, {'Content-Type':'text/plain'})
    res.write("Sorry bro!\n")
    res.write("Date: "+dt.givedate())
    res.end("\nThe end\n"+dt.myname())

    process.exit();
}

).listen(8080, ()=> {
    console.log("The server is running on port 8080.")
})
