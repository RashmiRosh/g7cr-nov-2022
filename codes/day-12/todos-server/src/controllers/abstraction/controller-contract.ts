import { Request, Response } from "express";

export interface IController {
    // (req: Request, res: Response): Promise<void>;
    getAction(req: Request, res: Response): Promise<void>;
    getAllAction(req: Request, res: Response): Promise<void>;
    postAction(req: Request, res: Response): Promise<void>;
    putAction(req: Request, res: Response): Promise<void>;
    deleteAction(req: Request, res: Response): Promise<void>;
}