import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEventLink, setSelectedEventLink] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleGetTickets = (link) => {
    setSelectedEventLink(link);
    setShowModal(true);
  };

  const handleEmailSubmit = () => {
    console.log('Email entered:', email);
    setShowModal(false);
    window.location.href = selectedEventLink;
  };

  return (
    <div className="App">
      <h1>Events in Sydney</h1>
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div className="event" key={index}>
              <h3>{event.name}</h3>
              <p>Date: {event.date || 'Unknown'}</p>
              <p>Location: {event.location || 'Sydney'}</p>
              <button onClick={() => handleGetTickets(event.link || 'https://example.com')}>
                Get Tickets
              </button>
            </div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Your Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@example.com"
            />
            <div className="modal-buttons">
              <button onClick={handleEmailSubmit}>Submit</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
