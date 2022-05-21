import mongoose from "mongoose";
import { LetterInfo } from "../interfaces/LetterInfo";

const LetterSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    },
    isOpened: {
        type: Boolean,
        required: true
    },
})

export default mongoose.model<LetterInfo & mongoose.Document>("Letter", LetterSchema);