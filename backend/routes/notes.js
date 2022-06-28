const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//ROUTE 1 : Get All the Notes using : GET "/api/notes/getuser". Login required

try {
  // Here we are fetching data which we are post through post request in the request down below using route 2
  router.get("/fetchallnotes", fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  });
} catch (error) {
  // This is simply for checking error if due to any issue error occur we simply send the error to console
  console.error(error.message);
  res.status(500).send("Some Error occured");
}

//ROUTE 2 : Add a new Note using : POST "/api/notes/addnote". Login required

try {
  router.post(
    "/addnote",
    fetchuser,
    [
      body("title", "Enter a valid name").isLength({ min: 3 }),
      body("description", "password must atleast 5 characters").isLength({
        min: 5,
      }),
    ],
    async (req, res) => {
      // Firstly taking data from the body of post request from the thunderclient
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // after taking note we can make a note type of schema and then save it to database using .save method
      const note = new Note({
        // Here title description are fetch from the body which we will done in the some lines above.
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      // res.json is only for sending a response which we will see in the response window
      res.json(savedNote);
    }
  );
} catch (error) {
  // This is simply for checking error if due to any issue error occur we simply send the error to console

  console.error(error.message);
  res.status(500).send("Some Error occured");
}

//ROUTE 3 : Updating an existing Note using : PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const {title,description,tag} = req.body;
    // create a new object
    try {
        
    
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}

    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not Allowed");

    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
    } 
    catch (error) {
        // This is simply for checking error if due to any issue error occur we simply send the error to console
        console.error(error.message);
        res.status(500).send("Some Error occured");
      }
})


//ROUTE 4 : Deleting an existing Note using : DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    // Find the note to be delete and delete it
    try {
        
    
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}
    //Allow deletion only if user own this note
    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not Allowed");

    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Success": "Note has been deleted", note: note});  
    }catch (error) {
        // This is simply for checking error if due to any issue error occur we simply send the error to console
        console.error(error.message);
        res.status(500).send("Some Error occured");
      }
}) 
     
module.exports = router;
