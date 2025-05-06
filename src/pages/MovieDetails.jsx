import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={movie.poster} className="w-full h-60 object-cover rounded" />
      <h2 className="text-xl font-bold mt-4">{movie.title}</h2>
      <p className="text-sm mt-2">{movie.description}</p>
      <a href={movie.downloadLink} target="_blank" rel="noreferrer">
        <button className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-500">Download</button>
      </a>
    </div>
  );
}