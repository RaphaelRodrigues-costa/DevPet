import { Request, Response } from "express";
import { Pets }  from "../models/pet"
import { createMenuObject } from "../helpers/createMenuObject"

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string
    
    if(!query){
        res.redirect('/')
        return;
    }
    const list = Pets.getFromName(query);
    console.log(list);

    return res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query
    });
}