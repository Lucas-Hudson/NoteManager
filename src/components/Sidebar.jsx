import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'



const Sidebar = props => {

    const {notes, addNote, selectNote, selectedNote, deleteNote} = props;

    const deleteIcon = <FontAwesomeIcon icon={faTimesCircle} />

    return (
            <div className="editor column column-25">
                <button onClick={addNote} className="button button-clear">+ New note</button>
                <ul className={"list"}>
                    {
                        notes.map(note => (

                            <li key={note.id}
                                id={note.id}
                                className={note.id === selectedNote.id ? "selected" : ""}
                            >
                                <span className={"text"} onClick={() => selectNote(note)}>{note.content || "New note"}</span>
                                <span onClick={() => deleteNote(note)} className={"float-right"}>{deleteIcon}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
    );
};

export default Sidebar;