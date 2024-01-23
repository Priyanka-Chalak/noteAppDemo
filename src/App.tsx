import React, { useState } from 'react';
import './App.css';
import Note from './components/note/notes';
import { Notes } from './components/note/data';
import AddNote from './components/addnote/add-note';
import { NoteType } from './components/note/notes-type';

function App() {
  const [notes,setNotes] = useState(Notes)
  const [editMode,setEditMode]=useState(false);
  const [noteToBeEdited,setNoteToBeEdited] =useState<NoteType | null>(null);

  const addNote=(note:NoteType)=>{
    setNotes([note,...notes])
  }

  const updateNote=(updatedNote:NoteType)=>
  {
    const index = notes.findIndex(note=>note.id ===updatedNote.id);
    let editedNotes=[...notes]
    editedNotes.splice(index,1,updatedNote);
    setNotes(editedNotes);
    setEditMode(false)
  }
  const editNote=(id:string)=>{
   console.log('edit',id)
   const note = notes.find(note=>note.id===id);
   setEditMode(true);
   if(note)
   {
    setNoteToBeEdited(note);
   }
  }

  const deleteNote=(id:string)=>{
    const index = notes.findIndex(note=>note.id === id);
    let editedNotes=[...notes]
    editedNotes.splice(index,1);
    setNotes(editedNotes);
  }
  return (
    <div className="App">
      <h2>Notes App[{notes.length}]</h2>
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote}></AddNote>
      <div>
        {
          notes.map(
            note=> <Note key={note.id} id={note.id} priority={note.priority} text={note.text} editNote={editNote} deleteNote={deleteNote}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
