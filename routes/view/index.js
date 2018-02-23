const router = require("express").Router();

router.get('/', function(req,res){
  let userSession = req.session;
  if (!userSession.user) {
    res.redirect('/login')
  } else {
    res.render('home', { title: 'Sample RESTful WebApp', css: ['home.css'] });
  }
})


router.get("/login", function(req, res) {
   res.render('signIn', { title: 'Sign in', css: ['signin.css'] });
});

router.get("/register", function(req, res) {
  res.render('register', { title: 'Register', css: ['register.css'] });
});

module.exports = router;