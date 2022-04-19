const express = require('express')
const router = express.Router()
const Book = require('../models/books')


router.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

//index
router.get('/', (req,res)=>{
    Book.find()
        .then(foundBook=>{
            res.json(foundBook)
        })
        .catch(err=>{
            res.send(err)
        })
})

//Finding book by its ID
router.get('/:id', (req,res)=>{
    Book.findById(req.params.id)
        .then(foundBook=>{
            res.json(foundBook)
        })
        .catch(err=>{
            res.send(err)
        })
})

//Add book 
router.get('/add/new', (req,res)=>{
    Book.create({
            "title": "New Book 2",
            "description": "New book 2 added to the database",
            "year": 2022,
            "quantity": 131,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    })
        .then(res.json({
            message: 'new book added'
        }))
        .catch(err=>{
            console.log('Something went wrong', err)
        })
       
})

//Delete book
router.get('/:id/delete', (req,res)=>{
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook=>{
            console.log('Deleted Book: ', deletedBook)
            res.redirect('/books')
        })
})

//Update
router.get('/:id/update', (req,res)=>{
    Book.findByIdAndUpdate(req.params.id,{"title" : "Updated Title"})
        .then(()=>{
            res.redirect('/books')
        })
})
        
module.exports = router