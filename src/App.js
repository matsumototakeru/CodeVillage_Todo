import React, { useState } from 'react'
import Form from './Form'
import shortid from 'shortid'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content: content,
                id: shortid.generate()
            }
        ])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
        <h1>Todo App</h1>
        <Form addTodo={addTodo} />
        <List todos={todos} deleteTodo={deleteTodo} />
    </>
    )
}

export default App