import { AddColor } from "../fun apps/AddColor";
import "./App.css";
import { MovieList } from "./MovieList";
import { TicTacToe } from "../fun apps/TicTacToe";
import "../fun apps/TicTacToe.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovies } from "./EditMovies";

function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        sx={{
          borderRadius: "0px",
          minHeight: "100vh",
        }}
        elevation={5}
      >
        <div className="App">
          <AppBar position="static">
            <Toolbar className="navBar-items">
              <div></div>
              <div>
                <Button onClick={() => navigate("/movies")} color="inherit">
                  Movies
                </Button>
                <Button onClick={() => navigate("/addcolor")} color="inherit">
                  Color Game
                </Button>
                <Button onClick={() => navigate("/TicTacToe")} color="inherit">
                  Tic Tac Toe
                </Button>
                <Button onClick={() => navigate("/addmovie")} color="inherit">
                  Add Movies
                </Button>
                <IconButton
                  variant="outlined"
                  onClick={() => setMode(!mode)}
                  color="inherit"
                >
                  {mode ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/addcolor" element={<AddColor />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="/addmovie" element={<AddMovie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movies/edit/:id" element={<EditMovies />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
