import { NextFunction, Request, Response } from "express";
import { Container }                       from "typedi";
import { LetterCreateDTO }                 from "../interfaces/LetterCreateDTO";
import message                             from "../modules/responseMessage";
import statusCode                          from "../modules/statusCode";
import AddLetterService                    from "../services/AddLetterService";
import ResponseWrapper                     from "../util/ResponseWrapper";

const addLetterService = Container.get(AddLetterService);
const AddLetterController = {
    postAddLetter: async (request: Request, response: Response, next: NextFunction) => {
        const letterCreateDTO: LetterCreateDTO = request.body
        try {
            if (!letterCreateDTO.nickname || !letterCreateDTO.contents) {
                const data = ResponseWrapper.failureOf(statusCode.BAD_REQUEST, message.NULL_VALUE)
                return response.status(statusCode.BAD_REQUEST)
                    .send(data)
            }
            const data = await addLetterService.createLetter(letterCreateDTO);
            return response.status(statusCode.CREATED)
                .send(data)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

export default AddLetterController