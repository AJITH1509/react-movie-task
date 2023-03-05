import { useState } from "react";
import Button from "@mui/material/Button";

export function ColorBox() {
  const [button, setButton] = useState(true);
  const [color, setColor] = useState("skyblue");

  function editColor(colors) {
    setColor(colors);
    setButton(false);
  }

  function updateColor() {
    setButton(true);
  }

  const styles = {
    backgroundColor: color,
  };
  const [addcolor, setAddcolor] = useState([]);
  return (
    <div>
      <div className="container">
        <input
          type="text"
          style={styles}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        {button ? (
          <Button
            variant="contained"
            onClick={() => setAddcolor([...addcolor, color])}
          >
            Add Color
          </Button>
        ) : (
          <Button variant="contained" onClick={() => updateColor()}>
            Update Color
          </Button>
        )}
      </div>
      {addcolor.map((clr, index) => (
        <ColorBlocks colors={clr} key={index} editColor={editColor} />
      ))}
    </div>
  );
}
function ColorBlocks({ colors, editColor }) {
  const bclr = {
    backgroundColor: colors,
  };
  return (
    <div className="colors-container">
      <div className="color-Blocks" style={bclr}></div>
      <Button onClick={() => editColor(colors)}>edit</Button>
    </div>
  );
}
