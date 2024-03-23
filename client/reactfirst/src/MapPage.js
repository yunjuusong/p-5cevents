import React from 'react';
import './App.css'; // Import the app.css file

function MapPage() {
  return (
    <div className="App">
      <div className="top-bar">
        <h1>Map</h1>
      </div>
      <div className="left-bar">
        <ul>
          <li><a href="/events">Events</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/map">Map</a></li>
        </ul>
      </div>
      <header className="App-header">
        <h2>Map Page</h2>
        <p>This is the map page content.</p>
      </header>
    </div>
  );
}

export default MapPage;
