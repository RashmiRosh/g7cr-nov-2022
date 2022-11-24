import { Component } from "react";

class Sample extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         x: 0
    //     }
    //     //this.increaseHandler = this.increaseHandler.bind(this)
    //     console.log('Sample created')
    // }
    state = {
        x: 0
    }
    increaseHandler = () => {
        //this.state.x += 1
        // console.log(this.state.x)
        // this.render()
        // let update = {
        //     x: 100
        // }
        // this.setState(update)
        this.setState(
            (currentState) => {
                return {
                    x: currentState.x + 1
                }
            },
            () => {
                console.log(this.state)
            }
        )

    }
    render() {
        console.log('Sample rendered')
        const design = (
            <div>
                <span>
                    X:&nbsp;{this.state.x}
                </span>
                <br />
                <button onClick={this.increaseHandler}>Increase</button>
            </div>
        )
        return design
    }
    // componentDidMount() {
    //     console.log('sample mounted')
    // }
}
export default Sample