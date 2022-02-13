import { ChangeEvent, FormEvent } from "react"
import { ReactComponent as Plus } from "../assets/svg/plus.svg"

export type AddTodoProps = {
     task: string
     handleSubmitTodo: (e: FormEvent) => void
     handleChange: (e: ChangeEvent) => void 
}

export const AddTodo = ({
    task,
    handleSubmitTodo,
    handleChange,
    }: AddTodoProps) => (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
        <input 
        className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
        type="text" name="task" value={task} onChange={handleChange} />
        <button type="submit" aria-label="Add todo" className="text-white">
            <Plus />Add
        </button>
    </form>
) 