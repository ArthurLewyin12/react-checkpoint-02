import React from "react";
import { Card } from "react-bootstrap";
import { Shield, Flag, Cake, Hashtag } from "iconsax-reactjs";

const ink = "#15171A";
const grey = "#6E6A63";
const line = "#E4E0D8";

const styles = {
  card: {
    height: "100%",
    border: `1px solid ${line}`,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  photoWrapper: {
    position: "relative",
    aspectRatio: "4 / 5",
    backgroundColor: "#D9D5CC",
  },
  // absolute so the photo always fills the 4:5 box, whatever its own size
  photo: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 15%",
    display: "block",
  },
  number: {
    position: "absolute",
    left: 0,
    bottom: 0,
    minWidth: 64,
    padding: "6px 12px 2px",
    backgroundColor: ink,
    color: "#FFFFFF",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 1,
    textAlign: "center",
  },
  body: {
    padding: "18px 20px 8px",
  },
  name: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1,
    textTransform: "uppercase",
    color: ink,
    marginBottom: 6,
  },
  position: {
    fontSize: 14,
    color: grey,
    marginBottom: 14,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 0",
    borderTop: `1px solid ${line}`,
    fontSize: 15,
  },
  label: {
    color: grey,
  },
  value: {
    marginLeft: "auto",
    fontWeight: 600,
    color: ink,
    textAlign: "right",
  },
};

// Default value for each attribute, used when a player doesn't have it
function Player({
  name = "Unknown Player",
  position = "Unknown position",
  team = "Free Agent",
  teamColor = "#15171A",
  nationality = "Unknown",
  jerseyNumber = "--",
  age = "--",
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
}) {
  const rows = [
    { icon: Shield, label: "Team", value: team },
    { icon: Flag, label: "Nationality", value: nationality },
    { icon: Cake, label: "Age", value: age },
    { icon: Hashtag, label: "Number", value: jerseyNumber },
  ];

  return (
    <Card className="player-card" style={styles.card}>
      <div style={styles.photoWrapper}>
        <img src={imageUrl} alt={name} style={styles.photo} loading="lazy" />
        <span style={styles.number}>{jerseyNumber}</span>
      </div>
      {/* a stripe in the color of the club */}
      <div style={{ height: 6, backgroundColor: teamColor }} />
      <Card.Body style={styles.body}>
        <Card.Title as="h2" style={styles.name}>
          {name}
        </Card.Title>
        <p style={styles.position}>{position}</p>
        <ul style={styles.list}>
          {rows.map(({ icon: Icon, label, value }) => (
            <li key={label} style={styles.row}>
              <Icon size={18} color={grey} variant="Linear" />
              <span style={styles.label}>{label}</span>
              <span style={styles.value}>{value}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Player;
