import { Post } from "../../models/post.model"
import { IDataService } from "../abstraction/data.service"

export class PostsService implements IDataService<Post> {
    async getData(): Promise<Post[]> {
        const resp: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
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