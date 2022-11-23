import { TodoDao } from "../dao/implementation/todo-dao";
import { TodoBusinessComponent } from "../bo/implementation/todo-bo";
import { TodosController } from "../controllers/implementation/todos-controller";

export const IMPLEMENTATION_TYPES = {
    DAO_IMPLEMENTATION: 'DAO_IMPLEMENTATION',
    BO_IMPLEMENTATION: 'BO_IMPLEMENTATION',
    CONTROLLER_IMPLEMENTATION: 'CONTROLLER_IMPLEMENTATION'
}