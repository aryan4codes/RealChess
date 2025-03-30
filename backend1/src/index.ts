// ws in node.js

import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });
const gameManager = new GameManager();  


wss.on('connection', function connection(ws) {
    gameManager.addUser(ws); // Add user to the game manager 
    ws.on("disconnect",() => gameManager.removeUser(ws));
});


