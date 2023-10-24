import {createContext,useState} from 'react';
import axios from "axios"
const BookContext = createContext();
 const Provider = ({children})=>{
  const [books, setBooks] = useState([]);
  
  const fetchBooks= async()=>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  };

  
  const editBookById = async (id,newTitle)=>{
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
     title:newTitle
    });
    
     const updatedBooks = books.map((book)=>{
          if(book.id === id){
         // return{...book , title: newTitle}
         return{...book,...response.data }
         
       }
       return (book);
     })  
     setBooks(updatedBooks)
    }
   const deleteBookById = async (id) =>{
     axios.delete(`http://localhost:3001/books/${id}`)
      const updatedBooks =books.filter((book)=>{
          return book.id !== id;
      })
      setBooks(updatedBooks)
   };
   const createBook = async(title) => {
   const response =  await axios.post('http://localhost:3001/books',{
       title,
     });
     // console.log(response);
     const updatedBooks = [
       ...books,
       response.data
     ];
     setBooks(updatedBooks)
 
    //  console.log('Need to add book with title',title)
   }
  
 const  valueToShare={
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
   };


  return<BookContext.Provider value ={valueToShare}>
    {children}
  </BookContext.Provider>
 }

export {Provider};
export default BookContext;


























































// import {  createContext, useState } from "react";
//  import axios from 'axios';

//  const BooksContext = createContext() ;
//  const Provider = ({children})=>{
//      const [books, setBooks] = useState([]);
  
//     const fetchBooks= async()=>{
//       const response = await axios.get('http://localhost:3001/books')
//       setBooks(response.data)
//     }
 
    
//    const editBookById = async (id,newTitle)=>{
//     const response = await axios.put(`http://localhost:3001/books/${id}`,{
//      title:newTitle
//     });
    
//      const updatedBooks = books.map((book)=>{
//           if(book.id === id){
//          // return{...book , title: newTitle}
//          return{...book,...response.data }
         
//        }
//        return (book);
//      })  
//      setBooks(updatedBooks)
//     }
//    const deleteBookById = async (id) =>{
//      axios.delete(`http://localhost:3001/books/${id}`)
//       const updatedBooks =books.filter((book)=>{
//           return book.id !== id;
//       })
//       setBooks(updatedBooks)
//    };
//    const createBook = async(title) => {
//    const response =  await axios.post('http://localhost:3001/books',{
//        title,
//      });
//      // console.log(response);
//      const updatedBooks = [
//        ...books,
//        response.data
//      ];
//      setBooks(updatedBooks)
 
//     //  console.log('Need to add book with title',title)
//    }
    

//    const valueToShare ={
//     books,
//     deleteBookById,
//     editBookById,
//     createBook,
//     fetchBooks
//    };

//     return <BooksContext.Provider value= {{valueToShare}}>
//         {children}
//     </BooksContext.Provider>

// }

// export  {Provider};
// export default BooksContext;
















































































