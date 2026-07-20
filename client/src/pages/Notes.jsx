import { useEffect, useState } from "react";
import { getAllNotes } from "../services/noteService";

const Notes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetchNotes();

    }, []);

    const fetchNotes = async () => {

        try {

            const response = await getAllNotes();
            console.log(response.data);

            setNotes(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div>
            <h1>Student Notes</h1>
        </div>
    );
};

export default Notes;