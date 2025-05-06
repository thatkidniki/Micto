import { useState } from "react";
import axios from "axios";

export default function AdminUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null);
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("poster", poster);
    formData.append("movie", movie);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setMessage("Upload successful: " + res.data.title);
    } catch (err) {
      setMessage("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 bg-gray-800 rounded text-white" required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 bg-gray-800 rounded text-white" required />
      <input type="file" onChange={(e) => setPoster(e.target.files[0])} required />
      <input type="file" onChange={(e) => setMovie(e.target.files[0])} required />
      <button className="bg-green-600 px-4 py-2 rounded">Upload</button>
      {message && <p>{message}</p>}
    </form>
  );
}