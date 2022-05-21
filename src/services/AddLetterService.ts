import { Service }                 from "typedi";
import ResponseWrapDTO             from "../interfaces/common/ResponseWrapDTO";
import { LetterCreateDTO }         from "../interfaces/LetterCreateDTO";
import { LetterCreateResponseDTO } from "../interfaces/LetterCreateResponseDTO";
import Letter                      from "../models/Letter";
import message                     from "../modules/responseMessage";
import statusCode                  from "../modules/statusCode";
import ResponseWrapper             from "../util/ResponseWrapper";

@Service()
export default class AddLetterService {
    constructor() {
    }

    private saveLetter = async (letterData: LetterCreateDTO) => {
        const letter = new Letter({
            nickname: letterData.nickname,
            contents: letterData.contents
        });
        await letter.save();
        return letter;
    };

    async createLetter(letterData: LetterCreateDTO): Promise<ResponseWrapDTO<LetterCreateResponseDTO>> {
        try {
            const letter = await this.saveLetter(letterData);

            return ResponseWrapper.successOf<LetterCreateResponseDTO>(
                statusCode.CREATED,
                message.CREATED_NEW_LETTER,
                {
                    id: letter._id,
                    nickname: letter.nickname,
                    contents: letter.contents,
                    isDeleted: letter.isDeleted,
                    isOpened: letter.isOpened
                }
            )
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getTotalLetter(): Promise<number> {
        try {
            return await Letter.count()
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};