const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = 3000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const animals = [
  { type: "lion" },
  { type: "rabbit" },
  { type: "dolphin" },
  { type: "horse" },
  { type: "peacock" },
  { type: "nyc-pigeon" },
  { type: "eagle" },
  { type: "flamingo" },
  { type: "blob-fish" },
  { type: "clownfish" },
  { type: "octopus" },
  { type: "seahorse" },
  { type: "crocodile" },
  { type: "snake" },
  { type: "frog" },
  { type: "iguana" }
]

app.get("/", (req, res) => {
  res.json("Hello World")
})

app.get("/animals", (req, res) => {
  res.json(animals)
})

const isAnimal = (req, res, next) => {
  let passed
  animals.forEach(el => {
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

app.get("/animals/:type", isAnimal, (req, res) => {
  res.json(req.params.type)
})

app.get("/animals/:id", (req, res) => {
  //   console.log(req.params.id)
  res.json(animals[req.params.id])
})

app.listen(port, () => {
  console.log("Listening to port ", +port)
})
