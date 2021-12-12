import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote,setNewNote] = React.useState([]);
  function createNote(note){
    setNewNote(previousnote =>
    {
      return [...previousnote ,note];
    });
}
function deleteItem(id){
setNewNote(prenote =>{
  return prenote.filter((noteItem,index) =>
  {
    return id !==index;
  })
})}

return (
    <div>
      <Header />
      <CreateArea 
      addNote={createNote}/>  
      {newNote.map((noteItem,index) => { 
      return <Note key={index} 
      id = {index}
      callDel={deleteItem}
      title={noteItem.title}
      content={noteItem.content}/>;
      })}
      <Footer />
    </div>


  );
}

export default App;
