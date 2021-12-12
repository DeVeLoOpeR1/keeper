import React from "react";

function CreateArea(props) {
  
  const [note,setNote] = React.useState({
    title : "",
    content :""
  });
  

  function handleChange(event){
    const {name,value} = event.target;
    setNote(previousValue =>
    {
      return {...previousValue, [name] : value}
    })
}

function handleButton(event){
  event.preventDefault();
  props.addNote(note);
  setNote({
    title :"" , content:""})


}

  return (
    <div>
      <form>
        <input
         onChange = {handleChange}
         name="title" 
         placeholder="Title" 
         value = {note.title} />

        <textarea 
        onChange = {handleChange}
        name="content" 
        value={note.content}
        placeholder="Take a note..."
        rows="2" />

        <button onClick = {handleButton}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
