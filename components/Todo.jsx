import React from 'react';


function Todo({ title, dispatch, id }) {
  return (
    <div>
      <span>{title}</span>
      <button onClick={() => dispatch({ type: 'edit-todo', payload: { id } })}>Edit</button>
      <button onClick={() => dispatch({ type: 'remove-todo', payload: { id } })}>Remove</button>
    </div>
  );
}


export default Todo;
