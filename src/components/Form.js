import React from 'react'; 
import { useState } from 'react';

export default function Form( props ) {
    const { onSave } = props;
    const [text, setText] = useState('');

    return (
            <form onSubmit={ e => e.preventDefault() } id="todo-form">
                <label>Task List</label>
                <input id="taskInput" type="text" value={text || ""} onChange={ e => setText(e.currentTarget.value) }/>
                
                <button type="button" onClick={() => { 
                    onSave(text);
                    setText("");
                    }}>
                        Save
                </button>
            </form>
    );
}