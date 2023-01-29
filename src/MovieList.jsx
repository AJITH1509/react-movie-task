import { Movies } from "./Movies";

export function MovieList({ details }) {
  return (
    <div className="movie-list">
      {details.map((ele, index) => (
        <Movies props={ele} id={index} />
      ))}
    </div>
  );
}
