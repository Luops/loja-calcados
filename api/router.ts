import { Router } from "express";
import { Request, Response } from "express";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json("It's working!")
})