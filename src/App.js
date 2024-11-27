import React, {useState} from "react";
import './App.css';

function App() {
const [username,setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if(!username || !password){
    setMessage("Both fields for mandatory.");
  }else if (username === "user" && password === "password") {
    setMessage("Welcome, user!");
  }else{
    setMessage("Invalid username or password");
  }
}

  return (
<div className ="xlogin">
  <form className = "xlogin-form" onSubmit = {handleSubmit} >
    <div className = "xlogin-field">
    <label htmlFor = "username">Username</label>
    <input 
    type = "text"
    id = "username"
    value = {username}
    onChange = {(e) => setUsername(e.target.value)}
    />
    </div>
    <div className = "xlogin-field">
      <label htmlFor = "password">Password</label>
      <input
      type = "text"
      id="password"
      value={password}
      onChange = {(e) => setPassword(e.target.value)}
        />
      </div>
      <button type = "submit" className = "xlogin-button">
        Submit
      </button>
  </form>
  {message && (
        <p className={`xlogin-message ${message === "Welcome, user!" ? "success" : "error"}`}>
          {message}
        </p>
      )}
</div>
  );
}

export default App;
