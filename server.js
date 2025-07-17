const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000


app.set("view engine", 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const connection = require("./config/db")
const userModel = require("./models/user")

app.get('/', (req, res) => {
    res.render('contact')
})


app.post("/create", (req, res) => {

    let { username, email, password } = req.body;


    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {

            let newUser = await userModel.create({
                username,
                email,
                password: hash
            })

        })
    })


    res.json({
        message: ("Submitted!")
    }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
