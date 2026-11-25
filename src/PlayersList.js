import React from "react";
import { Row, Col } from "react-bootstrap";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <Row className="g-4">
      {players.map((player) => (
        <Col key={player.name} xs={12} md={6} lg={4}>
          <Player {...player} />
        </Col>
      ))}
    </Row>
  );
}

export default PlayersList;
