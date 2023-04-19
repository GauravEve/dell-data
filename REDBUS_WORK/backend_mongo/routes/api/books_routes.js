const express=require('express');
const router=express.Router();

//lets load the book model
const Book=require('../../models/Books');

//@route GET api/book_route/test
router.get('/test',(req,res)=>{
    res.send("Book Route testing");
});

//@route GET api/book_route/
//@descriptor GET all books
//@access public

router.get('/',(req,res)=>{
    Book.find()
    .then(books=>res.json(books))
    .catch(err=>res.status(404).json({err:"No books found"}));
});

//@route POST api/book_route/
//@descriptor add/save books
//@access public

router.post('/',(req,res)=>{
    Book.create(req.body)
    .then((book)=>res.json({msg:"book added successfully"}))
    .catch(err=>res.status(400).json({msg:"Unable to add"}));
});

//@route GET api/book_route/
//@descriptor GET specific book
//@access public

router.get('/:id',(req,res)=>{
    Book.findById(req.params.id)
    .then(books=>res.json(books))
    .catch(err=>res.status(404).json({err:"No books found"}));
});

//@route GET api/book_route/
//@descriptor update the book
//@access public

router.post('/:id',(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,req.body)
    .then(books=>res.json({msg:"Books updated succesfully"}))
    .catch(err=>res.status(404).json({err:"Unable to update book"}));
});

//@route GET api/book_route/
//@descriptor delete the book
//@access public

router.delete('/:id',(req,res)=>{
    Book.findByIdAndRemove(req.params.id,req.body)
    .then(books=>res.json({msg:"Book deleted successfully"}))
    .catch(err=>res.status(404).json({err:"No such book found"}));
});


module.exports=router;

