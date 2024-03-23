import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CalendarPage from './CalendarPage';
import EventPage from './EventPage';
import MapPage from './MapPage';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path="/events" element={<EventPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* This route will be matched for any other route */}
      </Routes>

      </div>
    </Router>
  );
}

export default App;
