# RealChess

RealChess is a full-stack real-time chess application that enables users to play chess online. The project is divided into two main parts:

- **Backend**: Located in [backend1](d:/Projects/WEBDEV/RealChess/backend1), it handles game logic using [chess.js](https://github.com/jhlywa/chess.js) and real-time communication using WebSockets provided by the [ws](https://github.com/websockets/ws) library.
- **Frontend**: Located in [frontend](d:/Projects/WEBDEV/RealChess/frontend), it is a React application built with [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/). It provides a responsive user interface with components like a chess board, play options, and landing screen.


## Backend Setup

1. Open a terminal in the `backend1` directory:
    ```sh
    cd backend1
    npm install
    ```
2. Build the TypeScript files:
    ```sh
    npx tsc
    ```
3. Start the backend server (ensure you have Node.js installed):
    ```sh
    node dist/index.js
    ```
   The WebSocket server will run on port `8080` as defined in [src/index.ts](d:/Projects/WEBDEV/RealChess/backend1/src/index.ts).

## Frontend Setup

1. Open a terminal in the `frontend` directory:
    ```sh
    cd frontend
    npm install
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```
3. Open [index.html](d:/Projects/WEBDEV/RealChess/frontend/index.html) in your browser or follow the URL provided by Vite.  
   The frontend uses React with Vite, Tailwind CSS (configured in [tailwind.config.js](d:/Projects/WEBDEV/RealChess/frontend/tailwind.config.js)) and routing in [App.tsx](d:/Projects/WEBDEV/RealChess/frontend/src/App.tsx).

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Icons
- **Backend**: Node.js, TypeScript, WebSockets (`ws`), chess.js

## Scripts

### Frontend (from [frontend/package.json](d:/Projects/WEBDEV/RealChess/frontend/package.json))
- `npm run dev` - Starts the development server.
- `npm run build` - Builds the frontend for production.
- `npm run lint` - Lints the source code.

### Backend (from [backend1/package.json](d:/Projects/WEBDEV/RealChess/backend1/package.json))
- You can run custom scripts as needed. Currently, the backend package uses `node` for running the built code.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. If you have any questions, consult the documentation for [Vite](https://vitejs.dev/), [React](https://reactjs.org/), or [chess.js](https://github.com/jhlywa/chess.js).

## License

This project is open source. See the [license](LICENSE) file for details.