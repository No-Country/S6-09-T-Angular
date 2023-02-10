import express from "express"
import bodyParser from "body-parser" // body parser middleware
import cors from "cors" //enable cors
//import session from "express-session" // session middleware on the server side
import classSchema from "../models/classSchema.js"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
/*app.use(
    session({
        secret: process.env.DB_CONNECTION,
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    })
)*/

// Create new classroom
app.post("/classroom", async (req, res) => {
    const user = classSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Get all user classrooms
app.get("/classroom/:id", (req, res) => {
    const { id } = req.params
    classSchema
        .find({ user_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Get all classrooms
app.get("/classroom/all", (req, res) => {
    classSchema
        .find({})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Delete an user classroom
app.delete("/classroom/:id", (req, res) => {
    const { id } = req.params
    classSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

export default app