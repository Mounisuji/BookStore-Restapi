const express = require("express");
const Book = require("../models/Book");
var {successResponse,errorResponse} = require("../helpers/message");
const logger = require("../utils/logger")

let BookController = {

    //create a new Book
    async createBook(req,res,next){
        try{
            const {title,author,summary} = req.body;

            if(title == null){
                return res.status(200).json({responseCode:200,message:"Title is Required"})
            }

            //create a new book
            const newBook = await Book.create({
                title:title,
                author:author,
                summary:summary
            });
            
            console.log("newBook",newBook)
            return successResponse(req,res,newBook,'Book Created Successfully')
        }
        catch(error){
            //console.log(error)
            logger.errorLogger(`api error - ${error}`)
           return res.status(500).json({errorMessage:'Crete Book api error'})
        }
    },

    //get all books
    async getAllBooks(req,res,next){
        try{
            let books = await Book.find();
            return successResponse(req,res,books,'Get All Books Successfully')

        }
        catch(error){
            //console.log(error)
            logger.errorLogger(`api error - ${error}`)
           return res.status(500).json({errorMessage:'Get All Books api error'})
        }

    },

    //get one book by using id
    async getBookById(req,res,next){
        try{
            let book = await Book.findById({
                _id:req.query._id
            });

            return successResponse(req,res,book,'Get Book Successfully')

        }
        catch(error){
            //console.log(error)
            logger.errorLogger(`api error - ${error}`)
           return res.status(500).json({errorMessage:'Get Book api error'})
        }

    },

    //update a book using id
    async updateBook(req,res,next){
        try{
            let {title,author,summary,bookId} = req.body;

            let bookCheck = await Book.findOne({ _id: bookId });
          if (!bookCheck) {
            logger.errorLogger(`Book doesn't exists - ${JSON.stringify(bookId)}`);
            return errorResponse(req, res, "Please register first");
          }

            let updateBook = await Book.findByIdAndUpdate(
                {_id:bookId},
                {
                    title:title,
                    author:author,
                    summary:summary
                },
                {new:true}
                );
                if(updateBook){
                    return successResponse(req,res,updateBook,"Book Updated Successfully ")
                }else{
                    return errorResponse(req,res,"Something went wrong")
                }

        }
        catch(error){
            //console.log(error)
            logger.errorLogger(`api error - ${error}`)
           return res.status(500).json({errorMessage:'Update Book api error'})
        }

    },

    //Delete a book using id

    async deleteBook(req, res, next) {
        try {
          let { bookId } = req.query;
          console.log(bookId);
          let bookCheck = await Book.findOne({ _id: bookId });
          if (!bookCheck) {
            logger.errorLogger(`Book doesn't exists - ${JSON.stringify(bookId)}`);
            return errorResponse(req, res, "Please register first or provide valid bookid");
          }
          let deleteBook = await Book.findByIdAndDelete({
            _id: bookId,
          });
    
          return successResponse(req, res, deleteBook, "Deleted a Book Successfully");
        } catch (error) {
            logger.errorLogger(`api error - ${error}`)
            return res.status(500).json({errorMessage:'Delete Book api error'})
        }
      },

}     
module.exports = BookController;