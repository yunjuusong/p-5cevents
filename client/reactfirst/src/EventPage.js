import React from 'react';
import './App.css'; // Import the app.css file

function EventPage() {
  return (
    <div className="App">
      <div className="top-bar">
        <h1>Events</h1>
      </div>
      <div className="left-bar">
        <ul>
          <li><a href="/events">Events</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/map">Map</a></li>
        </ul>
      </div>
      <header className="App-header">
        <h2>Welcome to the Home Page!</h2>
        <p>This is the homepage content.</p>
      </header>
    </div>
  );
}

export default EventPage;
