import React, { ReactElement } from 'react'
import withError from '../../hocs/withError';

type HeroPropsType = {
    heroName: string,
    children?: ReactElement[]
}
/*
const Hero = ({ heroName }: HeroPropsType) => {
    let design: ReactElement | undefined = undefined
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a hero')
        }
        design = <span>{heroName}</span>
    } catch (error) {
        design = <span>Not a Hero</span>
    }
    // if (heroName === 'Joker') {
    //     throw new Error('Not a hero')
    // }
    // design = <span>{heroName}</span>
    return design
}
*/
const Hero = ({ heroName, children }: HeroPropsType) => {
    console.log(children);
    let design: ReactElement | undefined = undefined
    if (heroName === 'Joker') {
        throw new Error('Not a hero')
    }
    design =
        (
            <div>
                <span>{heroName}</span>
                <br />
                {
                    children
                }
            </div>
        )
    return design
}
export default Hero
//export default withError(Hero)