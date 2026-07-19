const Note = require("../models/Note");

const createNote = async (req, res) => {
    try {

        const {
        title,
        subject,
        semester,
        description,
        pdf,
        isPublished,
    } = req.body;

    const newNote = await Note.create({
        title,
        subject,
        semester,
        description,
        pdf,
        isPublished,
    });

    res.status(201).json({
        succuss: true,
        message:"New notes has been created",
        data:newNote,
    });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        });
    }
    

    
}

const getAllNotes = async (req, res) => {
    try {

    const notes = await Note.find();

    res.status(200).json({
        success: true,
        data:notes,
        count:notes.length,
    });
        
    } catch (error) {

        res.status(500).json({
            succuss:false,
            message:error.message,
        })
        
    }
    
}

const getOneNote = async (req, res) => {
    try {
        const { id } = req.params;
        const OneNote = await Note.findById(id);

        if(!OneNote) {
            return res.status(404).json({
                success:false,
                message:"Notes not found",
            })
        }

        res.status(200).json({
            success: true,
            data:OneNote,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
        
    }
}


module.exports = {
    createNote,
    getAllNotes,
    getOneNote,
}