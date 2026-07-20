import { useEffect, useState } from "react";
import { getAllNotes } from "./services/noteService";

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({
    title:"",
    subject:"",
    semester:"",
    description:"",
  });



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

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
  }

return (
    <div>
        <h1>Student Notes</h1>


             <form>

            <input
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
            />

            <br /><br />

            <textarea
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleChange}
            />

            <br /><br />

            <button type="submit">
                Create Note
            </button>

        </form>




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
