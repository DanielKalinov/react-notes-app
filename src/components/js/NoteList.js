import React from 'react';
import Note from './Note';

function NoteList(props) {
    const noteListStyle = {
        height: '300px',
        overflowY: 'auto'
    }

    let renderedList = props.notes.map(note => (
        <Note key={note.id} note={note} editNote={props.editNote} selectNote={props.selectNote}/>
    ));

    return(
        <div style={noteListStyle}>
            {renderedList}
        </div>
    )
}

export default NoteList;
