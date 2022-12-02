const Notes = require("../model/NoteModel");

const getAllDoc = async (req, res) => {
    try {
        const data = await Notes.find();
        console.log("data", data);
        return res.json(data);
    } catch (error) {
        return res.json({ "error": error.message })
    }
}

const getDocById = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await Notes.findById(id);
        if (data === null) {
            data = "NO object Found";
        }
        res.json({ "data": data });
    } catch (error) {
        res.json({ "error": error.message });
    }
};

const insertDoc = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const data = new Notes({ title, desc })
        await data.save()
        return res.json({ "msg": "Inserted Successfully" });
    } catch (error) {
        return res.json({ "error": error.message })
    }
}

const updateDoc = async (req, res) => {
    try {
        await Notes.findByIdAndUpdate(req.params.id, {$set: req.body})
        return res.json({"msg": "Updated Successfully"})
    } catch (error) {
        return res.json({ "error": error.message });
    }
}

const deleteDoc = async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id);
        return res.json({"msg": "Deleted Successfully"});
    } catch (error) {
        return res.json({"error": error.message});
    }
}
module.exports = { getAllDoc, insertDoc, getDocById, updateDoc, deleteDoc }