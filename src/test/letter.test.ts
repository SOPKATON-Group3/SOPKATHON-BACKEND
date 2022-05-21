import "mocha";
import test from 'ava'
import request from 'supertest'
import Letter from "../models/Letter";
import { LetterInfo } from "../interfaces/LetterInfo";
// import {before, beforeEach, afterEach, after} from './utils'

global.Promise = require("q").Promise;
import mongoose from "mongoose";
mongoose.Promise = global.Promise;

let chai = require("chai");
chai.should();

test.serial('쪽지를 열었지만, 삭제하지 않는다', async t => {
    // const MONGODB_URL = "mongodb+srv://sopkathon3:sopkathon3@cluster0.imwo0.mongodb.net/?retryWrites=true&w=majority"
    // @ts-ignore
    await mongoose.connect(MONGODB_URL)

    // given
    await Letter.remove()
    const letter1 = new Letter({
        'nickname': '행복한 소설가',
        'contents': '훌륭한 소설가는 많지만 훌륭한 수필가는 드물다고. 이유는 간명하다. 그러니까 이번 책은 행복한 작가 공지영의 첫 번째 출사표라고 할 수 있다.',
    })
    const letter2 = new Letter({
        'nickname': '고독한 여행자',
        'contents': '고독한 여행가; 부산, 경남을 비롯해 우리 주변의 여행하기 좋은 곳들을 소개하는 여행 코너. 친구, 연인, 가족과 함께 떠나는 여행이 아닌 혼자 떠나는 고독한 여행가이다.',
    })
    const letter3 = new Letter({
        'nickname': '나는야 귀요미',
        'contents': "다른 여자랑 말도 섞지마 난 니 거 (난 니 거) 새끼 손가락 걸고 꼭 약속해줘요 절대 나 혼자 내버려 두지 않기로 1더하기1은 귀요미",
    })

    await letter1.save()
    await letter2.save()
    await letter3.save()

    // @ts-ignore
    t.is(await Letter.count(), 3);

    // when

})

// when
// @ts-ignore
// const { app } = t.context
// const res = await request(app)
//     .post('/api/v1/modify')
//     .send({
//         'id':
//     })