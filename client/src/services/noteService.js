
import api from "./api";

//GET ALL NOTES
export const getAllNotes = async () => {
    const response = await api.get("/notes");
    return response.data;
}

//GET SINGLE NOTES
export const getSingleNote = async (id) => {
    const response = await api.get(`/notes/${id}`);
    return response.data;
}

//CREATE NOTE
export const createNote = async (noteData) => {
    const response = await api.post("/notes", noteData);
    return response.data;
}

//DELETE NOTE
export const deleteNote = async (id) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
}

//UPDATE NOTE
export const updateNote = async (id, noteData) => {
    const response = await api.put(`/notes/${id}`, noteData);
    return response.data;
}