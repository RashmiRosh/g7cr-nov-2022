interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface IDataService<T> {
    getData(): Promise<T[]>
}
class PostsService implements IDataService<Post> {
    async getData(): Promise<Post[]> {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
        //return <Post[]>data
        return data.map(
            (p: any): Post => {
                return {
                    userId: p.userId,
                    id: p.id,
                    title: p.title,
                    body: p.body
                }
            }
        )
    }
}

class TodosService implements IDataService<Todo> {
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

(
    async () => {
        const posts = await new PostsService().getData()
        posts.forEach(
            (p: Post) => console.log(p)
        )
    }
)();