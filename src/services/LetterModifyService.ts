import {LetterModifyDto} from "../interfaces/LetterModifyDto";
import Letter from "../models/Letter";

const openLetter = async (letterModifyDto: LetterModifyDto) => {
    try {
        const letter = await Letter.findById(letterModifyDto.id);
        if (!letter) {
            return null;
        }
        const filter = {
            _id: letterModifyDto.id
        }
        const update = {
            isOpened: letterModifyDto.isOpened,
            isDeleted: letterModifyDto.isDeleted
        }
        await Letter.findOneAndUpdate(filter, update);
        return await Letter.findById(filter);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    openLetter
}