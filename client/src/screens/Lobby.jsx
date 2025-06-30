import React, { useState , useCallback} from "react";
import { use } from "react";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({
        email,
        room,
    });
  },[email, room])
  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email"> Email ID</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="room"> Room Number</label>
        <input type="text" id="room" placeholder="Enter your Room" required value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}/>
        <br />
        <br />
        <button type="submit">Join Room</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
