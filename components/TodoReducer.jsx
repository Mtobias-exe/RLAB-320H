import React from 'react'

function TodoReducer(state,{type, payload: {title}} ) {
  switch (type) {
    case "submit-todo": {
      if (title === ""){
       return state;
      }
      let hasThisTodo = false;
    state.forEach((e) =>{
      if (e.title === title){
        alert(`There is already a ${title} in your todo`);
        hasThisTodo = true;
      }
    })
    if (hasThisTodo) return state;
    return [{title: title}, ...state];
    }
    case "remove-todo":
      return state.filter((s) => s.title !== title);
   
      default:
        throw Error("Unknown Action: " + type)
  }

}


export default TodoReducer
