import { useState } from "react";
export function ColorBox() {
  const [color, setColor] = useState("skyblue");
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
        <button onClick={() => setAddcolor([...addcolor, color])}>
          Add Color
        </button>
      </div>
      {addcolor.map((clr) => (
        <ColorBlocks colors={clr} />
      ))}
    </div>
  );
}
function ColorBlocks({ colors }) {
  const bclr = {
    backgroundColor: colors,
  };
  return <div className="color-Blocks" style={bclr} className="blocks"></div>;
}
