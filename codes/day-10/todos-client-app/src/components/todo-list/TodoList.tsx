import React, { Component } from 'react'
//import { todos } from '../../data/todos'
import { Todo } from '../../models/todo.model'
import TodoDetail from '../todo-detail/TodoDetail'
import styles from "./TodoList.module.css";

interface TodoListPropsType {
    todos: Todo[]
}
interface TodoListStateType {
    todos: Todo[]
}

class TodoList extends Component<TodoListPropsType, TodoListStateType> {
    state: Readonly<TodoListStateType> = {
        todos: this.props.todos
    }
    render() {
        return (
            <div className='container'>
                <div className='text-white bg-success'>TodoList</div>
                <br />
                <table className='table table-hover'>
                    <thead className={styles.Header}>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Assigned To</th>
                            <th scope='col'>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className='table-secondary text-white'>
                        {
                            this.state.todos.map(
                                (todo) => <TodoDetail key={todo.id} todoInfo={todo} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList