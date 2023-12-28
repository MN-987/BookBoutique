const { booksCollection } = require('../models/database');
const path=require('path');
const databaseFilePath = path.resolve(__dirname, '../models/database.js');
const fs=require('fs')

function writeDatabase() {
    try {
        const dataToWrite = `module.exports.booksCollection= ${JSON.stringify(booksCollection, null, 2)};`;
        fs.writeFileSync(databaseFilePath, dataToWrite, 'utf8');
    } catch (error) {
        console.error('Error writing to database:', error.message);
    }
}


exports.postAddBook=(req,res,next)=>{
console.log(req.body);

    let bookObject={
        "_id": req.body._id,
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "price": req.body.price
    }
booksCollection.push(bookObject)
console.log(booksCollection);

writeDatabase();
res.send(booksCollection);
}


exports.deleteDeleteBook=(req,res,next)=>{
    let _id = req.params.id;
    console.log('id:',_id)
    console.log('books collection',booksCollection)
    let bookToDelete = booksCollection.find(book => book._id == _id);

    if (!bookToDelete) {
        return res.status(404).send("Book not found");
    }

    let indexOfBookToDelete = booksCollection.indexOf(bookToDelete);
    booksCollection.splice(indexOfBookToDelete, 1);
    writeDatabase();

    res.send(booksCollection);
}
exports.putUpdateBook = (req, res, next) => {
    let _id = req.params.id;
    console.log('id:', _id);
    console.log('books collection', booksCollection);

    let existingBook = booksCollection.find(book => book._id == _id);

    if (!existingBook) {
        return res.status(404).send("Book not found");
    }

    existingBook.title = req.body.title || existingBook.title;
    existingBook.author = req.body.author || existingBook.author;
    existingBook.genre = req.body.genre || existingBook.genre;
    existingBook.price = req.body.price || existingBook.price;

    writeDatabase();

    res.send(existingBook);
}


