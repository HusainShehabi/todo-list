import { useState } from "react"

import { Row } from "./Row"
import { data } from "../todos"

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data)

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id != id)//loop through all todos and filter id that got clicked
        setTodos(updatedTodos)//update state to new todos
    }

    return(
        <section>
            {todos.map((todo) =>(
                <Row key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>
            ))}
        </section>
    )
}