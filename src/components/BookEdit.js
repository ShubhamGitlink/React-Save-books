import React,{useState,useContext} from 'react'
import BookContext from '../context/books';

const BookEdit = ({book,onEdit,onSubmit}) => {

  const [title,setTitle] = useState(book.title);
  const {editBookById} = useContext(BookContext)
const  handleChange=(e)=>{
     setTitle(e.target.value)
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    // setTitle("")
    // console.log('new title' ,title)
    // onEdit(book.id,title) // (note-> onEdit use in handlesubmit in bookshow collapsing two handlers)
    
    onSubmit();
    editBookById(book.id,title);
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit} >
      <label >Title</label>
      <input className='input' value = {title} onChange={handleChange}/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  )
}

export default BookEdit;