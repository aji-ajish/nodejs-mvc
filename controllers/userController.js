const { getUser } = require("../models/userModels")

exports.loginPage = (req, res, next) => {
    res.render('login')
}
exports.dashboardPage = (req, res, next) => {
   const user= getUser(req.query.email)
    res.render('dashboard',{user})
}

exports.loginProcess = (req, res, next) => {
    const user = getUser(req.body.email)
    console.log(req.body);
    if (user !== null && user.password === req.body.password) {
        res.redirect('/dashboard?email=' + req.body.email)
    } else if (user === null) {
        res.render('error', { message: "no user exists with this email" })
    }else{

    } res.render('error', { message: "invalid credentials" })
}