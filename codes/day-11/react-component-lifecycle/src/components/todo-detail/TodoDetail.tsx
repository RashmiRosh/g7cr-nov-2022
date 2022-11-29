import React, { Component, PureComponent } from 'react'
import { Todo } from '../../models/toto.model';

type TodoDetailPropsType = {
    selectedTodoId: number;
}
type TodoDetailStateType = {
    todo: Todo | null
}
export default class TodoDetail extends Component<TodoDetailPropsType, TodoDetailStateType> {

    constructor(props: TodoDetailPropsType) {
        super(props)
        this.state = {
            todo: null
        }
        console.log('TD created');
    }
    // shouldComponentUpdate(nextProps: Readonly<TodoDetailPropsType>, nextState: Readonly<TodoDetailStateType>, nextContext: any): boolean {
    //     let status = false
    //     for (let propName1 in this.props) {
    //         for (let propName2 in nextProps) {
    //             if (this.props[propName1] !== nextProps[propName2]) {
    //                 status = true
    //                 break;
    //             }
    //         }
    //     }
    //     for (let propName1 in this.state) {
    //         for (let propName2 in nextState) {
    //             if (this.state[propName1] !== nextState[propName2]) {
    //                 status = true
    //                 break;
    //             }
    //         }
    //     }
    //     return status
    // }

    shouldComponentUpdate(nextProps: Readonly<TodoDetailPropsType>, nextState: Readonly<TodoDetailStateType>, nextContext: any): boolean {
        console.log('TD should update??');
        console.log(this.props, nextProps);
        console.log(this.state, nextState)
        if (!this.state.todo || this.state.todo === null || this.props.selectedTodoId !== nextProps.selectedTodoId || nextState.todo?.id !== this.state.todo?.id) {
            return true
        } else
            return false
    }

    render() {
        console.log('TD rendered', this.props, this.state)
        if (this.state.todo && this.state.todo !== null) {
            return (<form>
                <div>
                    <label htmlFor="todoId">Id:
                    </label>
                    <input type="text" id='todoId' value={this.state.todo?.id} readOnly />
                </div>
                <div>
                    <label htmlFor="todoUserId">Id:
                    </label>
                    <input type="text" id='todoUserId' value={this.state.todo?.userId} />
                </div>
                <div>
                    <label htmlFor="todoTitle">Id:
                    </label>
                    <input type="text" id='todoTitle' value={this.state.todo?.title} />
                </div>
                <div>
                    <label htmlFor="todoStatus">Id:
                    </label>
                    <input type="text" id='todoStatus' value={this.state.todo?.completed.toString()} />
                </div>
            </form>)
        } else {
            return <span>Loading...please wait</span>
        }
    }
    componentDidUpdate(prevProps: Readonly<TodoDetailPropsType>, prevState: Readonly<TodoDetailStateType>, snapshot?: any): void {
        console.log('TD updated');
        if (!this.state.todo || this.state.todo === null || this.props.selectedTodoId !== prevProps.selectedTodoId) {
            console.log('attempting data fetching')
            this.fetchTodo()
        }
    }
    componentDidMount(): void {
        console.log('TD mounted')
        this.fetchTodo()
    }
    fetchTodo() {

        fetch('https://jsonplaceholder.typicode.com/todos/' + this.props.selectedTodoId)
            .then(
                (resp: Response) => {
                    resp
                        .json()
                        .then(
                            (data) => {
                                this.setState({
                                    todo: data as Todo
                                })
                            },
                            (e) => console.log(e)
                        )
                },
                (err) => console.log(err)
            )
    }
}
