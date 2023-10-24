import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/books";

const BookShow =({book})=>{
  const {deleteBookById} = useContext(BookContext);
 const  handleDeleteClick=()=>{
    deleteBookById(book.id);
  }
 const [showEdit,setShowEdit] = useState(false);
  const handleEditClick=()=>{
    setShowEdit(!showEdit)
 };

 const handleSubmit = (id,newTitle)=>{
  setShowEdit(false)
 }

 let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit onSubmit={handleSubmit}  book = {book}/>
  }
    return(
  <div className="book-show">
  <img alt="books"
    src={`https://picsum.photos/seed/${book.id}/300/200`}
  />
  {content}
     <div className="actions">
      <button className="delete" onClick={handleDeleteClick}>edit</button>
      <button className="edit" onClick={handleEditClick}>delete</button>
     </div>
     
  </div>
  )
};
export default BookShow;