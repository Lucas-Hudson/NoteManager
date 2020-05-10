import React from 'react';
import SimpleMDE from 'react-simplemde-editor'
import Switches from './Switches'

const Editor = props => {

    const {selectedNote, updateNote, updateTheme} = props;

    return (
            <div className="editor column column-75">
                <div className={"row"}>
                   <span className={"pt5"}>Toggle mode</span> <Switches updateTheme={updateTheme}/>
                </div>

                <SimpleMDE
                    key={selectedNote.id}
                    onChange={updateNote}
                    value={selectedNote.content}
                    options={
                        {
                        placeholder: "Enter note...",
                        autofocus: true,
                        hideIcons: ["guide", "heading", "side-by-side", "fullscreen"],
                        }
                    }
                />

            </div>
    );
};

export default Editor;