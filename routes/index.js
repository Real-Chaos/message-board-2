var express = require('express');
var router = express.Router();
var formatDistance = require('date-fns/formatDistance')


const messages = [
  {
    title: "Hello",
    text: "Thanks for asking! I am doing well, I hope everything is going good for you as well.",
    user: "Charles",
    added: new Date()
  }, 
  {
    title: 'Yooo',
    text: "How are you doing, I hope you are well",
    user: "Amando",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages, formatDistance });
});


// get form

router.get('/new', (req, res) => {
  res.render('form', {title: "Message Board | New"})
})


// get form info

router.post('/new', (req, res) => {
  messages.unshift({
    title: req.body.postTitle,
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date()
  })

  res.redirect('/')
})

module.exports = router;
