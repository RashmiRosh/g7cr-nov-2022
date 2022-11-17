type calcType = (x: number, y: number) => number

type returnType = Promise<any[] | undefined | null | number | string>

type personModelType = {
    name: string,
    id: number,
    salary: number
}


const invokeFn = (fnRef: calcType, a: number, b: number) => {
    console.log(fnRef(a, b))
}
const addFunction = (a: number, b: number): number => a + b
invokeFn(addFunction, 10, 20)

async function fetchData(): returnType {
    return await (await fetch('')).json()
}

const peopleArray: personType[] = [{
    id: 1,
    name: 'anil',
    salary: 1000
}]