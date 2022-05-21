import mongoose from "mongoose";
import { LetterModifyDto } from "../interfaces/LetterModifyDto";

const openLetter = async(letterModifyDto: LetterModifyDto) => {
    // something
}

const softDeleteLetter = async() => {
    // something
}

export default {
    openLetter,
    softDeleteLetter
}