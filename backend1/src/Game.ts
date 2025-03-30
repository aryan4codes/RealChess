import { Chess } from "chess.js";
import { GAME_OVER, MOVE, INIT_GAME } from "./messages";


export class Game {
  public player1: WebSocket;
  public player2: WebSocket;

  public board: Chess;
  private moves: string[];
  private startTime: Date;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();
    this.startTime = new Date();
    this.moves = [];
    
    // this.player1.send(
    //   JSON.stringify({
    //     type: INIT_GAME,
    //     payload: {
    //       board: this.board.fen(),
    //       color: "white",
    //       time: 0
    //     },
    //   })
    // );
    
    // console.log("Sending init message to player2");
    // this.player2.send(
    //   JSON.stringify({
    //     type: INIT_GAME,
    //     payload: {
    //       board: this.board.fen(),
    //       color: "black",
    //       time: 0
    //     },
    //   })
    // );
  }
  

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    }
  ) {
    // Make move on the board
    //check which users move
    // is this valid

    // update board

    //check if game is over

    // send move to other player
    //validate move

    if (this.board.moves().length === 0 && socket !== this.player1) {
      return; // First move must be made by player1
    } 
    else if (this.board.moves().length === 1 && socket !== this.player2) {
      return;
    }

    try {
      this.board.move(move); // Make move on the board
    } catch (e) {
      return;
    }

    if (this.board.isGameOver()) {
      this.player1.send(
        JSON.stringify({ 
            type: GAME_OVER, 
            payload: {
                winner: this.board.turn() === "w" ? "black" : "white",
                moves: this.moves,
                time: new Date().getTime() - this.startTime.getTime()
            }
         })
      );
        this.player2.send(
            JSON.stringify({ 
                type: GAME_OVER, 
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white",
                    moves: this.moves,
                    time: new Date().getTime() - this.startTime.getTime()
                }
             })
        ); 
    }

    // if game is not over send messagaes to other player
    if(this.board.moves().length % 2 === 0){
        this.player2.send(
            JSON.stringify({
                type: MOVE,
                payload: {
                    move: move,
                    board: this.board.fen(),
                    time: new Date().getTime() - this.startTime.getTime()
                }

            })
        )
    }

    else {
        this.player1.send(
            JSON.stringify({
                type: MOVE,
                payload: {
                    move: move,
                    board: this.board.fen(),
                    time: new Date().getTime() - this.startTime.getTime()
                }

            })
        )
    }


  }
}
