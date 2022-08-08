var express = require("express")

var app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use ("/public", express.static("public"))


// Start
app.get("/", function (req, res) {
    res.render('pages/index')
})

// Ergebniss
app.get("/result", function (req, res) {
    // BMI = kg [kg] / m² [m]
    let m = (parseInt(req.query.cm, 10) / 100)
    let kg = parseInt(req.query.kg, 10)

    if (m == 0 || isNaN(m)){
        res.redirect('/')
    } else {
        let bmi = (kg / (m * m))
        res.render('pages/result', {
            bmi: bmi
        })
    }
})

app.listen(8080)