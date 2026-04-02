import { Todo } from "@/generated/prisma/client"
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
    todo: Todo
    toggleTodo: (id: string, complete: boolean) => Promise<Todo>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
    return (
        <div className={`${todo.complete ? styles.todoDone : styles.todoPending} md:flex-row md:gap-0`}>
            <div className="flex flex-row justify-start items-center gap-4">
                <div
                    onClick={()=> toggleTodo(todo.id, !todo.complete)}
                    className={`flex p-2 rounded-md cursor-pointer
                     hover:bg-opacity-60
                    ${todo.complete ? ' bg-blue-100' : ' bg-red-100'} 
                    `}>
                    {todo.complete ?
                        <IoCheckboxOutline size={20} /> :
                        <IoSquareOutline size={20} />}
                </div>
                <div className="text-center md:text-left">
                    {todo.description}
                </div>

            </div>

        </div>
    )
}
