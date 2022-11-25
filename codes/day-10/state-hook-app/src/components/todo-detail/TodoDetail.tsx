import React from 'react'
import { Todo } from '../../models/todo.model'

type TodoDetailPropType = {
    todoRecord: Todo
}
const TodoDetail = (props: TodoDetailPropType) => {

    const { todoRecord } = props
    console.log(todoRecord)
    return (
        <tr>
            <td>{todoRecord.id}</td>
            <td>{todoRecord.title}</td>
            <td>{todoRecord.userId}</td>
            <td>{todoRecord.completed.toString()}</td>
        </tr>
    )
}

export default TodoDetail