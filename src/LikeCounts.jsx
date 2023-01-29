import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

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
          <ThumbUpOutlinedIcon />
        </IconButton>
      </Badge>
      <Badge badgeContent={dislike} color="error">
        <IconButton
          onClick={() => setUnlike(dislike + 1)}
          aria-label="DisLike"
          size="small"
        >
          <ThumbDownOutlinedIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
