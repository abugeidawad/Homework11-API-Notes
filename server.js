const express = require('express')
const app = express()
const port = 3000

app.get('/api/notes', (req, res) => {
  res.json(
      [
          {
              "title": "my first note",
              "textarea":"my first text area"
          },
          {
            "title": "my second note",
            "textarea":"my second text area"
        }
      ]
  )
})
app.post('/api/notes', (req, res) => {
    // save a note
    res.json({"status":"ok"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})