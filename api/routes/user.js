const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.render("login.ejs");
})
router.route('/login').post((req, res) => {
    console.log("Req Session: ", req.session);
    req.session.user = req.body.email;
    console.log("Req Session: ", req.session);
    // console.log("Req SessionID: ",req.sessionID);
    // console.log("Req Session Storage: ",req.sessionStore);
    res.end("Form Submitted!");
})

module.exports = router;