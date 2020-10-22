const router = require("express").app();
const store = require("../db/store");

    // this code will execute when the server receives a GET request to api/notes
    router.get("/notes", function(req, res){
        store
        res.json(notes);
        });
    // read what is in db.json => using fs module
    fs.writeFile('/db/store', data, (err) => {
        if (err) throw err;
        console.log('Note taken');
    
    // send response with data
app.post("/notes",function(req,res){
    store
    .addNote(req.body)
    res.json(notes);
    if (err) throw err;
})

            // take new note and add it to db.json using fs module
            app.get("/api/notes", function(req, res){
                res.json(data);
                res.json(true)
            })
// DELETE "/api/notes" deletes the note with an id equal to req.params.id
app.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
    });
})
    module.exports = router;
