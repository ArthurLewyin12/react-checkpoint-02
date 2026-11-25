import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import PlayersList from "./PlayersList";
import players from "./players";

function App() {
  return (
    <div className="App">
      <Container className="py-5">
        <header className="app-header">
          <h1 className="app-title">Player Cards</h1>
          <p className="app-meta">
            Season 2026/27 · {players.length} players
          </p>
        </header>

        <PlayersList />
      </Container>
    </div>
  );
}

export default App;
