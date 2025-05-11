import './App.css';

function App() {
  const events = [
    { name: "Sydney Music Festival" },
    { name: "Opera House Tour" },
    { name: "Harbor Bridge Climb" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Events in Sydney</h1>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h2>{event.name}</h2>
              <p>Date: Unknown</p>
              <p>Location: Sydney</p>
              <button>Get Tickets</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;