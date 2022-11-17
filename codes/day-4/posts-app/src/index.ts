import { Post } from "./models/post.model";
import { PostsService } from "./services/implementation/posts.service";


const showPosts = async () => {
    const postService = new PostsService()
    const posts = await postService.getData()
    posts.slice(0, 10).forEach(
        (p: Post) => console.log(p)
    )
}
showPosts()