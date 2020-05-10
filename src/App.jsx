import React, {useState} from 'react';
import 'milligram'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

const App = () => {

    const savedNotes = JSON.parse(localStorage.getItem("NoteManager"));

    const [notes, setNotes] = useState(savedNotes || []);
    const [selectedNote, setSelectedNote] = useState({});
    const [theme, setTheme] = useState("");

    const addNote = () => {
        setNotes([...notes, { id: Date.now(), content: "" }]);
    };

    const selectNote = note => {
        setSelectedNote(note);
    };

    const updateNote = content => {
        const nIndex = notes.findIndex(note => note.id === selectedNote.id);
        notes[nIndex] = {...selectedNote, content: content};
        setNotes(notes);
        setSelectedNote(notes[nIndex]);
        localStorage.setItem("NoteManager", JSON.stringify(notes));
    };

    const deleteNote = note => {
        const nIndex = notes.findIndex(savedNote => savedNote.id === note.id);
        notes.splice(nIndex, 1);
        setSelectedNote({});
        setNotes(notes);
        localStorage.setItem("NoteManager", JSON.stringify(notes));
    };

    const updateTheme = () => {
        setTheme(theme === "dark" ? "" : "dark");
    };

    return (
        <div className={`App container ${theme}`}>
            <h1>Note Manager</h1>
            <div className="row">
                <Sidebar notes={notes} addNote={addNote} selectNote={selectNote} selectedNote={selectedNote} deleteNote={deleteNote} />
                <Editor selectedNote={selectedNote} updateNote={updateNote} updateTheme={updateTheme}/>
            </div>
        </div>
    );
};

export default App;
