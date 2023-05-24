import { Request, Response } from "express"

const getAll = async (req: Request, res: Response) => {
    return res.status(200).json({message: 'Returned all!'})
}

export default{
    getAll
}