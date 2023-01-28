import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function LikeCounts({ incrementCart }) {
  const [like, setLike] = useState(0);
  const [dislike, setUnlike] = useState(0);
  return (
    <div className="likes">
      <Badge badgeContent={like} color="primary">
        <IconButton
          onClick={() => setLike(like + 1)}
          aria-label="Like"
          size="small"
        >
          👍
        </IconButton>
      </Badge>
      <Badge badgeContent={dislike} color="error">
        <IconButton
          onClick={() => setUnlike(dislike + 1)}
          aria-label="DisLike"
          size="small"
        >
          👎
        </IconButton>
      </Badge>
    </div>
  );
}
