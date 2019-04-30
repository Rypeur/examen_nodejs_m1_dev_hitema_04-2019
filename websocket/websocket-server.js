const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3001 });
let messages =[];
  
webSocketServer.on('connection', webSocket => {
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        messages.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
            });
        };
        if(messages.length >0){
            for(var i =0 ; i<messages.length;i++){
                webSocket.send(messages[i]);
            }
            
        }
    });

module.exports = webSocketServer;
