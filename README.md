# WebRTC Full Stack working

This repository demonstrates a complete working example of WebRTC, covering signaling, ICE servers, and peer-to-peer communication. The stack includes **Express** (Node.js) for the backend signaling server and **React** for the frontend client application.

## Features

- **WebRTC Peer-to-Peer Connection**: Real-time video and audio streaming between clients.
- **Signaling Server with Express**: Handles offer, answer, and ICE candidate exchange.
- **ICE Server Integration**: Uses STUN/TURN servers for NAT traversal.
- **React Frontend**: User-friendly UI for initiating and receiving calls.
- **Node.js Backend**: Simple, scalable signaling implementation.

## Project Structure

```
webrtc/
├── client/       # React frontend
├── server/       # Express + Node.js signaling backend
├── package.json
├── README.md
```

## How It Works

1. **Signaling**: The backend Express server handles the exchange of signaling data (SDP offers/answers and ICE candidates) between peers using WebSockets or HTTP.
2. **WebRTC Connection**: The frontend React app handles WebRTC API logic for media streams, peer connection, and ICE negotiation.
3. **ICE Servers**: The application configures STUN/TURN servers for reliable connectivity across networks.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/Vaibhavvs7/webrtc.git
    cd webrtc
    ```

2. **Install dependencies for both client and server**
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

3. **Configure ICE Servers (Optional)**
    - By default, public STUN servers are used.
    - For production, update the ICE server configuration in the frontend code to use your TURN server.

4. **Start the backend**
    ```bash
    cd ../server
    npm start
    ```

5. **Start the frontend**
    ```bash
    cd ../client
    npm start
    ```

6. **Open the app**
    - Visit `http://localhost:3000` in your browser.

## Usage

- Open the app in two different browser windows or devices.
- Use the UI to create or join a call room.
- The app will establish a peer-to-peer connection using WebRTC for real-time communication.

## Technologies Used

- **Frontend**: React, WebRTC API
- **Backend**: Node.js, Express, WebSocket (or Socket.io)
- **Networking**: STUN/TURN ICE servers

## Key Files

- `server/index.js`: Express server and signaling logic.
- `client/src/App.js`: Core React app and WebRTC logic.

## Customization

- **ICE Servers**: Edit the ICE server list in the React app for custom STUN/TURN.
- **Signaling**: Extend the signaling logic for multi-user calls or authentication.



---

**Author:** [Vaibhavvs7](https://github.com/Vaibhavvs7)
