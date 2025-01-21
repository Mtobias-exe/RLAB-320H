import { useState, useReducer } from 'react'
import TodoReducer from '../components/TodoReducer';
import Todo from '../components/Todo';
import TextInput from '../components/TextInput';
import SubmitBtn from '../components/SubmitBtn';


function App() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(TodoReducer, initialState);
  
  const todoList = todos.map((task) => {
    return (
     <Todo key={task.id} title={task.title} dispatch={dispatch}/>
    );
  });
  

  return (
    <>
      <h1>Todo List</h1>
     <div>
     <TextInput state={input} setState={setInput}/>
     <SubmitBtn
     type="submit-todo"
     payload={{title: input}}
     dispatch={dispatch}
     
     >
      +
     </SubmitBtn>
     </div>
     <div>
      <h2>Todos</h2>
      {todoList}
     </div>

    </>
  )
}

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }


];




export default App


