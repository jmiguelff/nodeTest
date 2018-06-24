// Joao Ferreira based on https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp

var http = require('http').createServer(handler); 	//require http server, and create server with function handler()
var fs = require('fs'); 							//require filesystem module

http.listen(8080); 									//listen to port 8080


//create server
function handler (req, res) { 
	fs.readFile(__dirname + '/public/index.html', (err, data) => { 	//read file index.html in public folder
    	if(err) {
      		res.writeHead(404, {'Content-Type': 'text/html'}); 		//display 404 on error
      		return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'text/html'}); 			//write HTML
    	res.write(data); 											//write data from index.html
    
    	return res.end();
  	});
}