import { Todo } from "../../models/todo.model"
import { IDataService } from "../abstraction/data.service"

export class TodosService implements IDataService<Todo> {
    async getData(): Promise<Todo[]> {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await resp.json()
        //return <Todo[]>data
        return data.map(
            (p: any): Todo => {
                return {
                    userId: p.userId,
                    id: p.id,
                    title: p.title,
                    completed: p.completed
                }
            }
        )

    }
}