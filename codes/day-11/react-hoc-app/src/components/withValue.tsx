import { Component, ComponentClass, FC, ReactNode } from "react";
import { ComponentPropTypes } from "../prop-types/compnent-prop-types";

function withValue(OriginalComponent: FC<ComponentPropTypes> | ComponentClass<ComponentPropTypes, any>) {

    type WithValueStateType = {
        value: number,
    }
    type WithValuePropsType = {

    }
    class WithValue extends Component<WithValuePropsType, WithValueStateType>{
        state: Readonly<WithValueStateType> = {
            value: 0,
        }
        valueHandler = () => {
            this.setState(
                (currentState) => {
                    return {
                        value: currentState.value + 1
                    }
                }
            )
        }

        render(): ReactNode {
            return <OriginalComponent valueData={this.state.value} valueHandlerFn={this.valueHandler} />
        }

    }
    return WithValue
}
export default withValue