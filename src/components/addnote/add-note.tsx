import Card from '../card/card';
import { NoteType, Priority } from '../note/notes-type';
import './add-note.css'
import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

type AddNoteProps = {
    addNote:(note: NoteType) => void,
    editMode:boolean,
    noteToBeEdited:NoteType | null,
    updateNote:(updatedNote:NoteType)=>void
}
function AddNote(props:AddNoteProps)
{
    const [text,setText]=useState("");
    const [priority,setPriority]=useState<Priority>('low');
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const setNoteContent = (note:NoteType)=>{
        setText(note.text);
        setPriority(note.priority);
    }

    //useEffect
    useEffect(()=>{
        if(props.noteToBeEdited && props.editMode )
        {
            setNoteContent(props.noteToBeEdited);
        }
    },[props.noteToBeEdited,props.editMode])

    const handleClick =(e:React.MouseEvent<HTMLElement,MouseEvent>) =>
    {
        e.preventDefault();
       if(props.editMode)
       {
        props.noteToBeEdited && props.updateNote({
            text,
            priority,
            id:props.noteToBeEdited.id
        })
       }
       else
       {
        props.addNote({
            text,
            priority,
            id:uuidv4()
        })
       }
        setText('')
        setPriority('low')
    }

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>
    {
       setPriority(e.target.value as Priority);
    }
    return(
        <Card height='2' padding='1' bgColor='grey'>
            <form className="add-note">
                <input type="text" onChange={handleChange}/>
                <select onChange={handleSelect} value={priority}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low"> Low</option>
                </select>
                <button onClick={handleClick}>{props.editMode ? 'Edit':'Add'}</button>
            </form>
        </Card>
    )
}

export default AddNote;