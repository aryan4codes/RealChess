import { Game } from "./Game";
import {WebSocket}  from "ws";
import { INIT_GAME , MOVE} from "./messages";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket | null; // User waiting for a game
  private users: WebSocket[];

  constructor() {
    this.games = [];
    this.pendingUser = null; // No user waiting for a game
    this.users = []; // List of users
  }

  addUser(socket: WebSocket) {
    this.users.push(socket); // Add user to the list of users
    this.addHandler(socket); // Add message handler for the user
    // Add user to the game
  }
  private addHandler(socket: WebSocket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data.toString());

      if (message.type === INIT_GAME) {
        if (this.pendingUser) {
          // Start game with pending user and current socket
          const game = new Game(this.pendingUser as any, socket as any); // Create a new game
          this.games.push(game);
          
            // Send game initialization message to both players
            this.pendingUser.send(
                JSON.stringify({
                    type: INIT_GAME,
                    payload: {
                    board: game.board.fen(),
                    color: "white",
                    time: 0,
                    },
                })
                );
            socket.send(
                JSON.stringify({    
                    type: INIT_GAME,
                    payload: {
                    board: game.board.fen(),
                    color: "black",
                    time: 0,
                    },
                })
                );
                
            // Remove pending user from the list of users                 
          this.pendingUser = null;
        } else {
          // First player, save as pending
          this.pendingUser = socket;
        }
      }
      

        if(message.type === MOVE) {
            // Handle move message
            const game = this.games.find(game => game.player1 === (socket as any) || game.player2 === (socket as any));
            if(game) {
                game.makeMove(socket as any , message.move); // Make move in the game
            
            }
          
        }
    });
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter(user => user !== socket); // Remove user from the list of users
    // Remove user from the game
  }

  private handleMessage() {
    // Handle messages from the user
  }
}
