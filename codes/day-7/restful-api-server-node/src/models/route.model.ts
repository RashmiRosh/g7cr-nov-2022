import { IncomingMessage, ServerResponse } from "http";

export interface Route {
    id: number;
    path: string | RegExp;
    method: string;
    controllerAction: (req: IncomingMessage, res: ServerResponse) => Promise<void>
}