'use client'


import { Todo } from "@/generated/prisma/client";
import { TodoItem } from "./TodoItem";
import * as api from '@/todos/helpers/todos';
import { useRouter } from "next/navigation";

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
    const router = useRouter();


    const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
        const updatedTodo = await api.updateTodos(id, complete);
        console.log({ updatedTodo })
        router.refresh();

        return updatedTodo;

    }

    console.log(todos)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}

        </div>
    )
}
