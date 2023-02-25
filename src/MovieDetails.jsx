import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mov) => setMovie(mov));
  }, []);

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate();

  return (
    <div>
      <iframe
        className="trailer"
        width="100%"
        height="600"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="specs">
          <h2 className="movie-title">{movie.name}</h2>
          <p style={styles} className="rating">
            ⭐{movie.rating}
          </p>
        </div>
        <p className="description">{movie.summary}</p>
      </div>
      <div className="movie-detail-backButton">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon fontSize="small" />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
