const mongoose = require("mongoose");

const NoteModel = new mongoose.Schema({
    title: {type: String, trim: true, required: true},
    desc: {type: String, trim: true, required: true}
})

const Notes = mongoose.model("Notes", NoteModel);

module.exports = Notes;