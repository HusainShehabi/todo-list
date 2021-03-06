import { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuidv4 } from "uuid";

import { Row } from "./Row"
import { data } from "../todos"
import { AddTodo } from "./AddTodo"

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data)
    const [task, setTask] = useState("")
    const todosLength = todos.length
    const hasTodos = todos.length > 0
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]
        setTodos(updatedTodos)
        setTask("")
    }
    
    const handleChange = (e: ChangeEvent) => {
        const {value} = e.target as HTMLInputElement
        setTask(value)
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        }
        task && handleAddTodo(todo)
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)//loop through all todos and filter id that got clicked
        setTodos(updatedTodos)//update state to new todos
    }

    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo ) => {
            if(todo.id === id){
                return{
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return(
        <section >
            <AddTodo
             task={task} 
            handleChange={handleChange}
            handleSubmitTodo={handleSubmitTodo}
            />
            <div className="h-10"/>
            {todos.map((todo) =>(
                <Row key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo}/>
            ))}
            {!hasTodos  && (<p className="mb-7 text-xl text-red-500 uppercase">Please add a todo!</p>)}
            {hasTodos && (
                    <p className="text-white">{`[${remainingTodos} of ${todosLength}] todos remaining`}</p>
                )
            }
        </section>
    )
}