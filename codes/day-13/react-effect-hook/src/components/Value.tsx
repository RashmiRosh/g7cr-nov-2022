import React, { useEffect } from 'react'

type ValuePropsType = {
    valueData: number,
    valueDataHandler: () => void
}
const Value = (props: ValuePropsType) => {
    useEffect(
        () => {
            console.log('Effect1');
            return () => {
                console.log('Effect1-cleanup');
            }
        }
    )

    useEffect(
        () => {
            console.log('Effect2');
            return () => {
                console.log('Effect2-cleanup');
            }
        },
        [props.valueData]
    )
    /*
        useEffect(
            () => {
                console.log('Effect2');
            },
            [props.valueData]
        )
        useEffect(
            () => {
                return () => {
                    console.log('Effect2-cleanup');
                }
            },
            [props.valueData]
        )
        */
    const x = 100
    useEffect(
        () => {
            console.log('Effect3')
            return () => {
                console.log('Effect3-cleanup');
            }
        },
        []
    )
    // useEffect(
    //     () => {
    //         console.log('Effect3')
    //     },
    //     []
    // )

    // useEffect(
    //     () => {
    //         return () => {
    //             console.log('Effect3-clean-up');
    //         }
    //     },
    //     []
    // )


    console.log('Value renderded')
    return (
        <div>
            Value:&nbsp;{props.valueData}
            <br />
            <button
                type='button'
                onClick={() => props.valueDataHandler()}>
                Increase
            </button>
        </div>
    )


}

export default Value