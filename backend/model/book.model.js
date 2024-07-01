import mongoose from "mongoose";

//creating a schema
const bookSchema = new mongoose.Schema( {
    title: String ,
    category : String ,
    image : String ,
    name : String ,
    price : Number ,

})

//creating a model for the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;