import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((res) => setMovies(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition">
            <img src={movie.poster} alt={movie.title} className="w-full h-40 object-cover" />
            <div className="p-2 text-sm">{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}