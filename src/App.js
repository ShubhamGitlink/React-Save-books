import React, { useEffect,useContext } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BookContext from './context/books'


const App = () => {
  const {fetchBooks} = useContext(BookContext);
  
  useEffect(()=>{
    fetchBooks();
  },[]) 
  

 
  

  // Before db code below
  // const createBook = title => {
  //   const updatedBooks = [...books,{
  //       id: Math.round(Math.random() * 9999),
  //       title}];
  //   setBooks(updatedBooks)

    // console.log('Need to add book with title',title)
  
  return (
    <div className='app'>
    <h1 className='hh1'>Reading List</h1>
      <BookList   />
      <BookCreate  />
    </div>
  )
}

export default App;
