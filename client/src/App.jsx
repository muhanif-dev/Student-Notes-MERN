import { useEffect, useState } from "react";
import { getAllNotes } from "./services/noteService";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await getAllNotes();
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

return (
    <div>
        <h1>Student Notes</h1>

        {notes.map((note) => (
            <div key={note._id}>
                <h2>{note.title}</h2>
                <p>Subject: {note.subject}</p>
                <p>Semester: {note.semester}</p>
                <hr />
            </div>
        ))}
    </div>
);
}

export default App;
