interface IOperations {
    add(a: number, b: number): number;
}

class Operations implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
}


interface IPerson {
    name: string;
    id: number;
    salary: number;
}

class PersonInfo implements IPerson {
    // name: string;
    // id: number;
    // salary: number;
    constructor(public name: string, public id: number, public salary: number) {

    }
}