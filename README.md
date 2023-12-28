# BookBoutique: A Comprehensive CRUD Operations Application

Welcome to BookBoutique, a user-friendly application that simplifies the management of your book inventory through powerful CRUD (Create, Read, Update, Delete) operations. BookBoutique is designed to cater to your book-related needs, offering a set of endpoints that allow seamless interaction with the database.

## Overview:

BookBoutique provides a hassle-free experience for book enthusiasts and administrators alike. This project is centered around the core principles of CRUD operations, making it easy to retrieve, update, find, and delete books.

## Key Features:

### 1. Retrieve Books - `/api/books`

Retrieve a comprehensive list of all books available in the BookBoutique database. Each book entry includes essential details to enhance the browsing experience.

### 2. Retrieve Book Details - `/api/book/:id`

Access detailed information for a specific book by providing its unique identifier. Get insights into the title, author, genre, and other relevant data.

### 3. Add a New Book - `/api/add-book`

Expand the BookBoutique collection by effortlessly adding a new book. The endpoint accepts data for a new book, ensuring a smooth process for updating your inventory.

### 4. Update Book Information - `/api/update-book/:id`

Keep your book information up-to-date by using this endpoint to modify details for a specific book. Whether it's correcting metadata or adding additional information, BookBoutique makes it a breeze.

### 5. Delete a Book - `/api/delete-book/:id`

Remove books from the database with ease. The `/api/delete-book/:id` endpoint allows for straightforward deletion of a book based on its unique identifier.

## Getting Started:

1. **Explore the Book Collection:**
   - Start by using the `/api/books` endpoint to discover the diverse array of books available.

2. **Dive into Book Details:**
   - Utilize the `/api/book/:id` endpoint to delve deeper into the specifics of a particular book.

3. **Expand Your Collection:**
   - To add a new book, make a POST request to `/api/add-book` with the relevant book details.

4. **Stay Updated:**
   - Keep your book information current by using the `/api/update-book/:id` endpoint for necessary modifications.

5. **Streamline Your Inventory:**
   - When it's time to remove a book, issue a DELETE request to `/api/delete-book/:id` for a seamless deletion process.
