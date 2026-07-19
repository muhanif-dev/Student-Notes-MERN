const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    pdf: {
        type: String,
        default:"",
    },
    isPublished: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;