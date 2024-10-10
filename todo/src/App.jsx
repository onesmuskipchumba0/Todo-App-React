import { useState } from 'react'
/* import './App.css' */

import InputForm from './InputForm'
import ListGroup from './ListGroup'

function App() {
  /* handles creation of todo item */
  const [todo, setTodo] = useState('')
  /* Handler adding todos to the list */
  const [todos, setTodos] = useState([])
  const onInputChange = (e) => {
    setTodo(e.target.value)
  }
  /* Add a todo item to the array todos */
  /* set the todos to be the new array */
  const addTodo = (e) =>{
    e.preventDefault()
    const newTodoArray = [...todos, todo]
    setTodos(newTodoArray)
    setTodo('')
    console.log(todos)
  }
  const deleteTodo = (todoIndex) =>{
    const newTodos = todos.filter((todo, index) => index !== todoIndex)
    setTodos(newTodos)

  }
  const updateTodo = (index) =>{
    let todo_update = prompt("Enter new todo item: ")
    const new_todos = [...todos]
    new_todos[index] = todo_update
    setTodos(new_todos)
  }
  return (
    <>
      <body className=''>
        <h1
          className='text-center font-bold mt-5 mb-5'
        >Todo List App</h1>
        <InputForm onClickHandler={addTodo} onChangeHandler={onInputChange} value={todo}/>
        <ListGroup todos={todos} deleteHandler={deleteTodo} updateHandler={updateTodo}/>
      </body>
    </>
  )
}

export default App
