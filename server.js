const express = require('express');
const session = require('express-session');
const userRoute = require('./api/routes/user');
//now express package contain build in body parser after v 4.
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//setting up our view engine
app.set('view engine', 'ejs');
//set express session
app.use(session({
    secret: "My Secret",
    resave: false,
    saveUninitialized: true
}));
app.use('/api/user', userRoute);
//home route
app.get('/', (req, res) => {
    res.render("index.ejs");
})
// app.get('/signup', (req, res) => {
//     res.render("signup.ejs");
// })
// app.get('/login', (req, res) => {
//     res.render("login.ejs");
// })
// app.post('/login', (req, res) => {
//     console.log(req.body);
// })
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        console.log("Server is Running on port: ", PORT);
    }
});