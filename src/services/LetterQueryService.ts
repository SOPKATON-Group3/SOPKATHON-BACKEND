import Letter from "../models/Letter";

const getLetters = async (_isOpened: boolean, _isDeleted: boolean) => {
    const condition = {
        isOpened: _isOpened,
        isDeleted: _isDeleted
    }
    console.log(">>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    return await Letter.find(condition);
}

export default {
    getLetters
}