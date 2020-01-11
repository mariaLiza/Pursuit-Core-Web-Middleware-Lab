const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = 3000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const animal = {
//   animals: [
//     { species: "mammals", type: "lion" },
//     { species: "mammals", type: "rabbit" },
//     { species: "birds", type: "peacock" },
//     { species: "birds", type: "nyc-pigeon" },
//     { species: "fish", type: "blob-fish" },
//     { species: "fish", type: "clownfish" },
//     { species: "reptile", type: "crocodile" },
//     { species: "reptile", type: "snake" }
//   ]
// }

const animal = [
  { type: "lion" },
  { type: "rabbit" },
  { type: "peacock" },
  { type: "nyc-pigeon" },
  { type: "blob-fish" },
  { type: "clownfish" },
  { type: "crocodile" },
  { type: "snake" }
]

app.get("/", (req, res) => {
  res.json("Hello world")
})

app.get("/animal", (req, res) => {
  res.json(animal)
})

app.get("/animal/:type", (req, res) => {
//   console.log(req.params)

  res.json(req.params.type)
})

app.get("/animal/:id", (req, res) => {
  console.log(req.params.id)
  res.json(animal[req.params.id])
})

// app.get("/animal/:animals/:type", (req, res) => {
//   console.log(req.params)
//   res.json({ animal: req.params })
// })

// const middlewareA = (req, res, next) => {
//     console.log("Middleweare A has been fired")
//     next();
// }
// app.use(middlewareA);

app.listen(port, () => {
  console.log("Listening to port ", +port)
})
