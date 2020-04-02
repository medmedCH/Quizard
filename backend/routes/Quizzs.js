const express = require('express')
const router = express.Router()
let Quizze = require('../models/Quizz');
// get all quiz questions
router.get('/quizz', (req, res) => {
    Quizze.find()
    .then(quizzs => res.json(quizzs))
    .catch(err=> res.status(400).json('error:'+err));
})

// get one quiz question
router.get('/quizz/:id', (req, res) => {
    Quizze.findById(req.params.id)
    .then(quizzs => res.json(quizzs ))
    .catch(err => res.status(400).json('Error: ' + err));
})

// create one quiz question
router.post('/quizz', (req, res) => {
    let r = Math.random().toString(36).substring(7);

        const code = r;
        const classe = req.body.classe;
        const Question = req.body.Question;
        const Timer = Number(req.body.Timer);
        const Quizz = new Quizze ({
            code,
            classe,
            Question,
            Timer
        })
        Quizz.save()
        .then(() => res.json('Quizz added succefully'+ Quizz))
        .catch(err => res.status(400).json('Error:' + err));
})

// update one quiz question
router.put('/Quizz/:id', (req, res) => {
    Quizze.findById(req.params.id)
    .then(quizz => {
        quizz.classe = req.body.classe;
        quizz.Question = req.body.question;
        quizz.Timer = Number(req.body.Timer);

        quizz.save()
        .then(() => res.json('quizz updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

// delete one quiz question
router.delete('/quizz/:id', (req, res) => {
    Quizze.findByIdAndDelete(req.params.id)
    .then(() => res.json('quizz deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

// this one is just a test
router.get('/', (req, res) => {
    res.send('H3ll0 W0RlD')
})


module.exports = router