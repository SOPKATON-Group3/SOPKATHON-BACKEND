import ResponseWrapDTO from "../interfaces/common/ResponseWrapDTO";

export default class ResponseWrapper {
    static successOf<T>(status: number, messgae: string, data?: T): ResponseWrapDTO<T> {
        return {
            statusCode: status,
            message: messgae,
            data: data
        }
    }

    static failureOf<T>(status: number, messgae: string, data?: T): ResponseWrapDTO<T> {
        return {
            statusCode: status,
            message: messgae,
            data: data
        }
    }
};