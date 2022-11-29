import { Request, Response } from "express";

export interface ECommerceControllerContract {
    getAction(req: Request, res: Response): Promise<void>;
    getAllAction(req: Request, res: Response): Promise<void>;
    postAction(req: Request, res: Response): Promise<void>;
    putAction(req: Request, res: Response): Promise<void>;
    deleteAction(req: Request, res: Response): Promise<void>;
}