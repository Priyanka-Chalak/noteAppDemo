export type Priority = 'high'|'medium'|'low';

export type Noteprops={
    text:string
    priority?:Priority
}

export type NoteType={
    id:string
    text:string
    priority:Priority
}

export enum Color{
    high='red',
    medium='coral',
    low='green'
}