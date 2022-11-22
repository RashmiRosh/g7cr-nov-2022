// export class ApiResponse<T>{
//     constructor(public message: string, public data: null | T | T[], public statisCode: number) {

//     }
// }

export interface ApiResponse<T> {
    message: string;
    data: null | T | T[];
    statusCode: number;
}