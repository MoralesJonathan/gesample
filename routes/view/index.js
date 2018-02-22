const router = require("express").Router();

router.get('/', function(req,res){
  let userSession = req.session;
  if (!userSession.user) {
    res.redirect('/login')
  } else {
    res.render('home')
  }
})


router.get("/login", function(req, res) {
  res.render("signIn");
});

router.get("/register", function(req, res) {
  res.render("register");
});

module.exports = router;