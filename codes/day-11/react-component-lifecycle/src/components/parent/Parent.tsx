import React, { Component } from 'react'
import { Todo } from '../../models/toto.model'
import Name from '../name/Name'
import TodoDetail from '../todo-detail/TodoDetail'
import Value from '../value/Value'

type ParentStateType = {
    value: number,
    name: string,
    todos: Todo[],
    selectedId: number
}
type ParentPropsType = {}
export default class Parent extends Component<ParentPropsType, ParentStateType> {
    private p?: Promise<Response> | null;
    constructor(props: ParentPropsType) {
        super(props)
        this.state = {
            value: 0,
            name: '',
            todos: [],
            selectedId: 0
        }
        console.log('Parent created')
    }
    // state: Readonly<ParentStateType> = {
    //     value: 0,
    //     name: '',
    //     todos: []
    // }
    stateHandler = (propName?: string, propValue?: string | number) => {
        this.setState(
            (currentState) => {
                if (propName) {
                    return {
                        ...currentState,
                        [propName]: propValue
                    }
                } else {
                    return {
                        ...currentState,
                        value: currentState.value + 1
                    }
                }
            },
            () => console.log(this.state)
        )
    }
    selectedIdHandler = (id: number) => {
        this.setState({
            selectedId: id
        })
    }
    render() {
        console.log('Parent rendered');
        return (
            <div>
                {/* <button onClick={() => this.fetchdata()}>Load Data</button> */}
                {
                    (this.state.todos && this.state.todos.length > 0) ?
                        (
                            <ul>
                                {
                                    this.state.todos.map(
                                        (todo) => {
                                            return (
                                                <li
                                                    key={todo.id}
                                                    onClick={() => this.selectedIdHandler(todo.id)
                                                    }>
                                                    {todo.title}
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        ) : 'Loading.....'
                }
                <br />
                <br />
                <Name nameData={this.state.name} nameDataHandler={this.stateHandler} />
                <br /><br />
                <Value valueData={this.state.value} valueDataHandler={this.stateHandler} />
                <br />
                <br />
                {
                    this.state.selectedId > 0 &&
                    <TodoDetail selectedTodoId={this.state.selectedId} />
                }
            </div>
        )
    }
    componentDidMount(): void {
        console.log('Parent mounted');
        this.fetchdata()
    }

    componentWillUnmount(): void {
        console.log('Parent unmounted')
        this.p = null
    }

    fetchdata() {
        this.p = fetch('https://jsonplaceholder.typicode.com/todos')
        this.p.then(
            (resp) => {
                resp.json()
                    .then(
                        (data) => {
                            this.setState(
                                (cs) => {
                                    return {
                                        ...cs,
                                        todos: (data as Todo[]).slice(0, 10)
                                    }
                                }
                            )
                        },
                        (e) => console.log(e)
                    )
            },
            (err) => console.log(err)
        )
    }
}
