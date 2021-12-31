const express = require('express')
const router = express.Router()

//Routes
router.get('/', (req, res) =>{
    res.render('index', { title:'Firts website'})
})


router.get('/contact', (req, res) =>{
    res.render('contact', { title:'Contact page'})
})



module.exports = router