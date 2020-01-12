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

const isAnimal = (req, res, next) => {
  let passed
  animal.forEach(el => {
    if (req.params.type === el.type) {
      passed = el.type
      res.json({ status: "sucess", message: true })
    } 
})
    if (!passed) {
       throw new Error("Animal not found") 
    }
  next()
}

app.get("/animal/:type", isAnimal, (req, res) => {
  res.json(req.params.type)
})

app.get("/animal/:id", (req, res) => {
  console.log(req.params.id)
  res.json(animal[req.params.id])
})


app.listen(port, () => {
  console.log("Listening to port ", + port)
})
