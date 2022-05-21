import {LetterModifyDto} from "../interfaces/LetterModifyDto";

export class LetterModifyDtoMock implements LetterModifyDto {
    id: string;
    isOpened: boolean;
    isDeleted: boolean;

    constructor(_id: string, _isOpened: boolean, _isDeleted: boolean) {
        this.id = _id;
        this.isOpened = _isOpened;
        this.isDeleted = _isDeleted;
    }
}