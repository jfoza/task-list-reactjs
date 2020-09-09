import React from 'react';

export default function List(props) {
    const { tasks } = props;

    return (
        <div id="list">
            { tasks.map((task, index) => {
                return (
                        <div key={index}>
                            <h2>{ task }</h2>

                            <div className="actions">
                                <button onClick={() => props.deleteTask(index)}>Excluir</button>
                            </div>
                        </div>
                );
            })}
        </div>
    );
}