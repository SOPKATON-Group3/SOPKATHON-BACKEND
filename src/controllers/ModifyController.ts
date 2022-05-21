import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import {LetterModifyDto} from "../interfaces/LetterModifyDto";
import LetterModifyService from "../services/LetterModifyService";

const openLetterController = async (req: Request, res: Response) => {
    const error = validationResult(req);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SDFDSFDS")
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const letterModifyDto: LetterModifyDto = req.body;

    try {
        const data = await LetterModifyService.openLetter(letterModifyDto);
        res.status(statusCode.OK).send(
            util.success(
                statusCode.OK,
                message.UPDATED
            )
        )
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            ));
    }
}

export default {
    openLetterController
}