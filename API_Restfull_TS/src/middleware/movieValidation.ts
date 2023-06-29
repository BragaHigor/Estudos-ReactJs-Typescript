import { body } from 'express-validator'

export const movieCreateValidation = () => {

    return [
        body("title")
            .isString()
            .withMessage("O título é obrigatório")
            .isLength({min: 3})
            .withMessage("Title: O Título precisa no mínimo 3 caracteres"),

        body("rating")
            .isNumeric()
            .withMessage("Rating: A nota precisa ser um número.")
            .custom((value: number) => {

                if(value < 0 || value > 10){

                    throw new Error("Rating: A nota precisa ser entre 0 e 10")
                }

                return true
            }),

        body("description")
            .isString()
            .withMessage("Description: A descrição é obrigatória."),

        body("director")
            .isString()
            .withMessage("Director: O nome do diretor é obrigatório."),

        body("poster")
            .isURL()
            .withMessage("Poster: A imagem precisa ser uma URL.")
    ]
}