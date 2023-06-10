import { Movies } from "./Movies";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export function MovieList() {
  const [details, setDetails] = useState([]);
  const [deleted, setDeleted] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mov) => setDetails(mov));
  };
  useEffect(() => getMovies(), []);
  const deleteMovies = async () => {
    await fetch(`${API}/movies/${deleted}`, {
      method: "DELETE",
    });
    getMovies();
    handleClose();
  };
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this movie?"}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={deleteMovies}>YES</Button>
        </DialogActions>
      </Dialog>
      {details.map((movie) => (
        <Movies
          key={movie._id}
          props={movie}
          id={movie._id}
          deleteButton={
            <IconButton
              disabled="true"
              sx={{ marginLeft: "auto" }}
              color="error"
            >
              <DeleteIcon
                onClick={() => {
                  setDeleted(movie._id);
                  handleClickOpen();
                }}
              />
            </IconButton>
          }
          editButton={
            <IconButton sx={{ marginLeft: "auto" }} color="secondary">
              <EditIcon onClick={() => navigate(`/movies/edit/${movie._id}`)} />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
