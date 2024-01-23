import './notes.css'
import {Color, Priority} from './notes-type';
import Card from '../card/card';
import { FaTrash,FaEdit } from 'react-icons/fa'

type Noteprops={
    id:string
    text:string
    priority?:Priority,
    editNote:(id: string) => void,
    deleteNote:(id:string)=>void
}

// Functional components
function Note(props:Noteprops){
    return(
        <Card bgColor = {props.priority && Color[props.priority]}
        height='2'
        padding='1'>
        <>
        <div>
            {props.text}
        </div>
        <div className='right'> 
            <FaEdit onClick={()=>props.editNote(props.id)}></FaEdit>
            <FaTrash onClick={()=>props.deleteNote(props.id)}></FaTrash>
        </div>
        </>
        </Card>
    )
}

export default Note; 