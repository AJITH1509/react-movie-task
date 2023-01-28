import { AddColor } from "./AddColor";
import { Alert } from "./Alert";
import "./App.css";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import "./TicTacToe.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movie Review</Link>
          </li>
          <li>
            <Link to="/addcolor">Color Game</Link>
          </li>
          <li>
            <Link to="/TicTacToe">Tic Tac Toe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/addcolor" element={<AddColor />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
function Home() {
  return (
    <div>
      <h1>welcome</h1>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <img
        src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif"
        alt="404 Error Notfound"
      />
    </div>
  );
}
