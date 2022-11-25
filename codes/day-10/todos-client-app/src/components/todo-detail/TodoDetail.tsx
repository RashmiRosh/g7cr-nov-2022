import React, { FC } from 'react'
import { Todo } from "../../models/todo.model";

interface TodoDetailPropsType {
    todoInfo: Todo
}
const TodoDetail: FC<TodoDetailPropsType> = ({ todoInfo }: TodoDetailPropsType) => {

    return (
        <tr>
            <td>
                {todoInfo.title}
            </td>
            <td>{todoInfo.userId}</td>
            <td>{todoInfo.completed ? 'Yes' : 'No'}</td>
            <td>
                <button type='button' className='btn btn-primary'>Edit</button>
            </td>
        </tr>
    )
}

export default TodoDetail