import "mocha";
import Letter from "../models/Letter";
import { LetterInfo } from "../interfaces/LetterInfo";

global.Promise = require("q").Promise;
import mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MONGODB_CONNECTION: string = `${process.env.MONGODB_URL}`;
let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);

let chai = require("chai");
chai.should();

describe("쪽지 도메인을 테스트한다.", async() => {
    it("쪽지를 등록할 수 있다.", async() => {
        // something
    });
    it("저장된 쪽지의 개수를 조회할 수 있다.", async() => {
        // something
    });
    it("쪽지를 저장하거나, 삭제할 수 있다.", async() => {
        // something
    });
    it("삭제되지 않은 쪽지 리스트를 반환할 수 있다.", async() => {
        // something
    })
})