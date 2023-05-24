import { Router } from "express";
import { Request, Response } from "express";
import userController from "./controllers/userController.ts";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json("It's working!")
})

router.get('/users', userController.getAll)