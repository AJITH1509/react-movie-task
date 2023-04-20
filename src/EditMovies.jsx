import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { API } from "../global";
import LinearProgress from "@mui/material/LinearProgress";

const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().url(),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().url(),
});

export function EditMovies() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mov) => setMovie(mov));
  }, [id]);
  return movie ? (
    <EditMovieForm movie={movie} />
  ) : (
    <LinearProgress color="success" />
  );
}
function EditMovieForm({ movie }) {
  const navigate = useNavigate();

  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updateMovie) => {
        addMovie(updateMovie);
      },
    });
  const addMovie = async (updateMovie) => {
    await fetch(`${API}/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: { "Content-Type": "application/json" },
    });

    navigate("/movies");
  };

  return (
    <Card id="add-movie-card">
      <CardContent>
        <form onSubmit={handleSubmit} className="add-movie-list">
          <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Enter Movie Name"
            variant="outlined"
            label="Movie Name"
          />
          {touched.name && errors.name ? errors.name : null}
          <TextField
            name="poster"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster}
            variant="outlined"
            label="Poster"
            placeholder="paste Image Address"
          />
          {touched.poster && errors.poster ? errors.poster : null}
          <TextField
            name="rating"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rating}
            variant="outlined"
            label="Rating"
            placeholder="Give Rating"
          />
          {touched.rating && errors.rating ? errors.rating : null}
          <TextField
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.summary}
            variant="outlined"
            label="Summary"
            placeholder="Add Summary"
          />
          {touched.summary && errors.summary ? errors.summary : null}
          <TextField
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
            variant="outlined"
            label="Trailer Link"
            placeholder="paste Trailer Link"
          />
          {touched.trailer && errors.trailer ? errors.trailer : null}
          <Button color="success" variant="contained" type="submit">
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
