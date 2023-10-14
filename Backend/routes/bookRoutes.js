const express = require("express");
const Book = require("../models/bookModels")
const router = express.Router();

// route to add book 
router.post('/', async (request,res) =>{
    try {
        if (
          !request.body.title ||
          !request.body.author ||
          !request.body.publishYear
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
          });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
          };
        const book = await Book.create(newBook);

        return res.status(201).send(book);
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: error.message})
    }
})

// route for to all book
router.get('/', async(req, res) =>{
try {
    const books = await Book.find({});

    return res.status(200).json({
        count: books.length,
        data: books, 
    });
}
catch(error){
console.log(error);
return res.status(500).send({message: error.message});
}
});


router.get('/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);

        return res.status(201).json(book);
    }
    catch(err){
        console.log(err);
        return res.status(400).send({message: err.message});
    }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  // Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

module.exports = router;