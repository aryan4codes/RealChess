import React from 'react';
import { Chessboard } from 'react-chessboard';

interface ChessBoardProps {
  position?: string;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
  position = 'start'
}) => {
  return (
    <div className="chess-board-container">
      {/* Opponent info and timer */}
      <div className="bg-gray-800 p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <img src="/avatar-placeholder.png" alt="Opponent" className="w-8 h-8 rounded-full" />
          </div>
          <span className="font-medium">Opponent</span>
        </div>
        <div className="flex items-center bg-gray-700 px-4 py-2 rounded">
          <span className="text-xl font-mono">10:00</span>
        </div>
      </div>

      {/* Chess board */}
      <div className="border-4 border-gray-700">
        <Chessboard 
          id="MainBoard"
          position={position}
          boardWidth={600}
          customDarkSquareStyle={{ backgroundColor: '#779952' }}
          customLightSquareStyle={{ backgroundColor: '#edeed1' }}
          areArrowsAllowed={false}
          showBoardNotation={true}
        />
      </div>

      {/* Player info and timer */}
      <div className="bg-gray-800 p-3 rounded-b-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <img src="/avatar-placeholder.png" alt="You" className="w-8 h-8 rounded-full" />
          </div>
          <span className="font-medium">Guest7047591714</span>
        </div>
        <div className="flex items-center bg-gray-700 px-4 py-2 rounded">
          <span className="text-xl font-mono">10:00</span>
        </div>
      </div>
    </div>
  );
};
