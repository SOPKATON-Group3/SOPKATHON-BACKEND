import "mocha";
import test from 'ava'
import Letter from "../models/Letter";
import LetterModifyService from "../services/LetterModifyService";
import LetterQueryService from "../services/LetterQueryService";

global.Promise = require("q").Promise;
import mongoose from "mongoose";
import {LetterModifyDtoMock} from "./LetterModifyDtoMock";
import config from "../config";
mongoose.Promise = global.Promise;

let chai = require("chai");
chai.should();

const MONGODB_URL = ""

const letter0 = new Letter({
    'nickname': '행복한 소설가',
    'contents': '훌륭한 소설가는 많지만 훌륭한 수필가는 드물다고. 이유는 간명하다. 그러니까 이번 책은 행복한 작가 공지영의 첫 번째 출사표라고 할 수 있다.',
})

const letter1 = new Letter({
    'nickname': '행복한 소설가',
    'contents': '훌륭한 소설가는 많지만 훌륭한 수필가는 드물다고. 이유는 간명하다. 그러니까 이번 책은 행복한 작가 공지영의 첫 번째 출사표라고 할 수 있다.',
})
const letter2 = new Letter({
    'nickname': '고독한 여행자',
    'contents': '고독한 여행가; 부산, 경남을 비롯해 우리 주변의 여행하기 좋은 곳들을 소개하는 여행 코너. 친구, 연인, 가족과 함께 떠나는 여행이 아닌 혼자 떠나는 고독한 여행가이다.',
    'isOpened': true,
    'isDeleted': false
})
const letter3 = new Letter({
    'nickname': '나는야 귀요미',
    'contents': "다른 여자랑 말도 섞지마 난 니 거 (난 니 거) 새끼 손가락 걸고 꼭 약속해줘요 절대 나 혼자 내버려 두지 않기로 1더하기1은 귀요미",
    'isOpened': true,
    'isDeleted': true
})
const letter4 = new Letter({
    'nickname': '나는야 딴따라',
    'contents': '훌륭한 딴따라는 많지만 훌륭한 딴따라는 드물다고. 이유는 간명하다. 그러니까 이번 책은 행복한 작가 공지영의 첫 번째 출사표라고 할 수 있다.',
    'isOpened': true,
    'isDeleted': false
})

test.serial('쪽지 1을 열었지만, 삭제하지 않는다', async t => {
    // @ts-ignore
    await mongoose.connect(MONGODB_URL)

    // given
    await letter0.save()
    const letter0Id = letter0._id.toString()

    // @ts-ignore
    // t.is(await Letter.count(), 3);
    // console.log(">LETTER >>>>>>>>>>>>> ", await Letter.findById(letter1._id.toString()).exec())

    // when
    const letter0UpdateDto = new LetterModifyDtoMock(
        letter0Id,
        true,
        false
    )

    await LetterModifyService.openLetter(letter0UpdateDto);

    // then
    const receipt = await Letter.findById(letter0Id)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", receipt)

    t.is(await receipt!["isOpened"], true);
    t.is(await receipt!["isDeleted"], false);

    // after
    await Letter.remove()
})

test.serial('열었지만 삭제되지 않은 쪽지만 열어야 하고, 고독한 여행자와 나는야 딴따라만 열어야 한다.', async t => {
    // before
    await Letter.remove()

    // @ts-ignore
    await mongoose.connect(MONGODB_URL)

    // given
    await letter1.save()
    const letter1Id = letter1._id.toString()

    await letter2.save()
    const letter2Id = letter2._id.toString()

    await letter3.save()
    const letter3Id = letter3._id.toString()

    await letter4.save()
    const letter4Id = letter4._id.toString()

    // when
    const notDeletedLetters = await LetterQueryService.getLetters(
        true, false
    );

    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>, ", await notDeletedLetters)

    // then
    t.is(await notDeletedLetters.length, 2);

    // after
    // await Letter.remove()
})
