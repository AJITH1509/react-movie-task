import { Movies } from "./Movies";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function MovieList() {
  const [details, setDetails] = useState([]);
  const getMovies = () => {
    fetch("https://63d762535c4274b136f32dc4.mockapi.io/movies")
      .then((data) => data.json())
      .then((mov) => setDetails(mov));
  };
  useEffect(() => getMovies(), []);
  const deleteMovies = async (id) => {
    await fetch(`https://63d762535c4274b136f32dc4.mockapi.io/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {details.map((movie) => (
        <Movies
          key={movie.id}
          props={movie}
          id={movie.id}
          deleteButton={
            <IconButton sx={{ marginLeft: "auto" }} color="error">
              <DeleteIcon onClick={() => deleteMovies(movie.id)} />
            </IconButton>
          }
          editButton={
            <IconButton sx={{ marginLeft: "auto" }} color="secondary">
              <EditIcon onClick={() => navigate(`/movies/edit/${movie.id}`)} />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
