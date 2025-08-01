import React, { useState } from 'react';
import './App.css';

function GuestView({ onLogin }) {
  return (
    <div>
      <h1>Please sign up.</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function UserView({ onLogout }) {
  return (
    <div>
      <h1>Welcome back</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <UserView onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestView onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
