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
    return(
        <section>
            {todos.map((todo) =>(
                <Row key={todo.id} todo={todo} />
            ))}
        </section>
    )
}