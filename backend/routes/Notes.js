const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1--- get all notes of user which is logged on http://localhost:5000/api/Notes/fetchallnotes \-login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    
    const notes = await Notes.find({ user: req.user.id });
    console.log(req.user.id);
    res.send(notes);
  } catch (error) {
    //catching error 
    console.log(error);
    res.status(500).json({ error: "some error" });
  }
});


// Route 2--- store notes of user on http://localhost:5000/api/Notes/storenotes \-login required
router.post(
  "/storenotes",
  fetchuser,
  [
    body("title", "emter valid title").isLength({ min: 3 }),
    body("discription", "enter valid discription").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // send error if error in user data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      
      
      
      let note = new Notes();
      note = await Notes.create({
        user: req.user.id,
        title: req.body.title,
        discription: req.body.discription,
        background:req.body.background,
        tag: req.body.tag,
      });
      console.log(note)
      res.send(note)
    } catch (error) {
      //catching error 
      console.log(error);
      res.status(500).json({ error: "some error" });
    }
    }
    );
    
    
    // Route 3--- update existing note on http://localhost:5000/api/Notes/updaternote/:noteId \-login required
router.put(
  "/updatenote/:id",
  fetchuser,
  async (req, res) => {
    const {title,discription, tag,background}=req.body;
    // creating body on new note to update existing one
    let newNote = new Notes();
    newNote = {};
    if(title){newNote.title=title}
    if(discription){newNote.discription=discription}
    if(tag){newNote.tag=tag}
    if(background){newNote.background=background}
    try {
      
      // getting existig note with noteId
      console.log(req.params.id)
      let note=await Notes.findById(req.params.id)
      if(!note){return res.status(404).send("not found")}
      if (note.user.toString()!==req.user.id) {return res.status(401).send("not allowed")}  
      
      note =await Notes.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true})
      res.json({note});
    } catch (error) {
      //catching error 
      console.log(error);
      res.status(500).json({ error: "some error" });
    }
  }
)
// Route 4--- delete existing note on http://localhost:5000/api/Notes/deletenode/:noteId \-login required
router.delete(
  "/deletenode/:id",
  fetchuser,
  async (req, res) => {
   try {
    
   
    // getting existig note with noteId
    console.log(req.params.id)
    let note=await Notes.findById(req.params.id)
    if(!note){return res.status(404).send("not found")}
    if (note.user.toString()!==req.user.id) {return res.status(401).send("not allowed")}  
    // delete note
    await Notes.findByIdAndDelete(req.params.id)
    res.send("note deleted")
  } catch (error) {
    //catching error other 
    console.log(error);
    res.status(500).json({ error: "some error" });
  }
  }
)

module.exports = router;
