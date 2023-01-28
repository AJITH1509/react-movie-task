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
import CardMedia from "@mui/material/CardMedia";

export function MovieDetails({ props }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: props.rating > 8 ? "green" : "red",
  };
  return (
    <Card className="moviecontainer">
      <img className="img" src={props.poster} />
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
          </h2>
          <p style={styles} className="rating">
            ⭐{props.rating}
          </p>
        </div>
        {show ? <p className="description">{props.summary}</p> : null}
      </CardContent>
      <CardActions>
        <LikeCounts />
      </CardActions>
    </Card>
  );
}
