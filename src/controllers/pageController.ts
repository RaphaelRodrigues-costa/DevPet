import { Request, Response } from "express";
import { Pets }  from "../models/pet"

/**
 * Aqui a função é utilizada no rander para definir onde o usuario esta em nosso menu de navegação,
 * depois é setado no nosso html em Header <nav>
 */
import {createMenuObject} from "../helpers/createMenuObject"


export const home = (req: Request, res: Response) => {
    const list = Pets.getAll()
    console.log(list);
    
    return res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os animais",
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    return res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: "Cachorro",
            background: 'banner_dog.jpg'
        }
    });
}


export const cats = (req: Request, res: Response) => {
    return res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: "Gatos",
            background: 'banner_cat.jpg'
        }
    });
}


export const fishes = (req: Request, res: Response) => {
    return res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: "Peixes",
            background: 'banner_fish.jpg'
        }
    });
}