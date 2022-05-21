import express, { Request, Response } from "express";
import LetterQueryService from "../services/LetterQueryService";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";

const queryController = async (req: Request, res: Response) => {
    const query = req.query;
    const _isOpened = query.isOpened;
    const _isDeleted = query.isDeleted;
    console.log(">>>>>>>>>>>> ", _isOpened)

    try {
        // @ts-ignore
        const data = await LetterQueryService.getLetters(_isOpened, _isDeleted)
        res.status(statusCode.OK).send(
            util.success(
                statusCode.OK,
                message.QUERIED,
                data
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
    queryController
}