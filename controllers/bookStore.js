const { booksCollection } = require('../models/database');



exports.getBooks = (req, res, next) => {
    res.json(booksCollection, null, 2); 
}


exports.getBookDetails=(req,res,next)=>{
    
    let _id = req.params.id;
    let bookDetails = booksCollection.find(book => book._id == _id);
    res.send(bookDetails);   
}