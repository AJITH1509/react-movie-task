import { display } from "@mui/system";
import { useState } from "react";
import { LikeCounts } from "./LikeCounts";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movies({ props, id, deleteButton, editButton }) {
  const [show, setShow] = useState(false);
  const styles = {
    color: props.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <Card id="movie-cards">
      <img className="img" alt={props.poster} src={props.poster} />
      <CardContent>
        <div className="specs">
          <h2 className="movie-title">
            {props.name}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="Toggle-Summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              color="primary"
              aria-label="movies-info"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={styles} className="rating">
            ⭐{props.rating}
          </p>
        </div>
        {show ? <p className="description">{props.summary}</p> : null}
      </CardContent>
      <CardActions id="like-delete">
        <LikeCounts /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
