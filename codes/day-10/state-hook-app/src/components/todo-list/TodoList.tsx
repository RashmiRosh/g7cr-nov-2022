import React, { useState, Fragment } from 'react'
import { todos } from '../../data/todos'
import { Todo } from '../../models/todo.model'
import TodoDetail from '../todo-detail/TodoDetail'

// interface TodoListStateType {
//     todos: Todo[]
// }
type TodoListStateType = Todo[]
const TodoList = () => {
    //useState<TodoListStateType>({ todos: [] })
    const [todoState, setTodoState] = useState<TodoListStateType>(todos)

    const todoStateHandler = () => {
        // let copy = [...todoState]
        // let sortedTodos = copy.sort(
        //     (t1, t2) => t1.id - t2.id
        // )
        // setTodoState(sortedTodos)
        // console.log('called')
        setTodoState(
            (oldTodos) => {
                let copy = [...todoState]
                copy.sort(
                    (t1, t2) => t1.id - t2.id
                )
                //console.log(copy);
                return copy
            }
        )
    }
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        todoState
                            .map(
                                (todo) => {
                                    return <TodoDetail key={todo.id} todoRecord={todo} />
                                }
                            )
                    }
                </tbody>
            </table>
            <br />
            <button type='button' onClick={
                () => todoStateHandler()
            }>Sort</button>
        </Fragment>
    )
}

export default TodoList