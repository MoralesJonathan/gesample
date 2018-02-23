/*jshint esversion: 6 */
const router = require("express").Router();

router.get('/', function(req,res){
  let userSession = req.session;
  if (!userSession.username) {
    res.redirect('/login');
  } else {
    console.log(req.query)
    res.render('home', { title: 'Sample RESTful WebApp', css: ['home.css'], userInfo: [{"name":  req.query.name, "email": req.query.email, "age": req.query.age, "language": req.query.lang}] });
  }
});


router.get("/login", function(req, res) {
   res.render('signIn', { title: 'Sign in', css: ['signin.css'] });
});

router.get("/register", function(req, res) {
  res.render('register', { title: 'Register', css: ['register.css'] });
});

module.exports = router;
