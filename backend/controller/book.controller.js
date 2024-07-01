import Book from "../model/book.model.js";

// Create and Save a new Book
export const getBook = async (req ,res) => {
    try {
        const book = await Book.find();
        res.status(200).send(book);
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).send({message : "Error in getting book"})
    }
}
