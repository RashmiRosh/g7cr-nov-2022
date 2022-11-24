import { Container } from "inversify";
import { IBusinessComponent } from "../bo/abstraction/bo-contract";
import { TodoBusinessComponent } from "../bo/implementation/todo-bo";
import { IMPLEMENTATION_TYPES } from "../config/constants";
import { IController } from "../controllers/abstraction/controller-contract";
import { TodosController } from "../controllers/implementation/todos-controller";
import { IDao } from "../dao/abstraction/dao-contract";
import { TodoDao } from "../dao/implementation/todo-dao";
import { Todo } from "../models/todo.model";

const container = new Container()
container.bind<IDao<Todo>>(IMPLEMENTATION_TYPES.DAO_IMPLEMENTATION).to(TodoDao)

container.bind<IBusinessComponent<Todo>>(IMPLEMENTATION_TYPES.BO_IMPLEMENTATION).to(TodoBusinessComponent)

container.bind<IController>(IMPLEMENTATION_TYPES.CONTROLLER_IMPLEMENTATION).to(TodosController)

// container.bind<IController>(IMPLEMENTATION_TYPES.POSTS_IMPLEMENTATION).to(PostsController)

export default container