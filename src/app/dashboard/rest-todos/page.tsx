import { prisma } from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";



export const metadata = {
  title: 'Listados de todos',
  description: 'SEO'
}
export default async function PageTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'asc' } })
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}