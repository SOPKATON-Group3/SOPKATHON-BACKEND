import request from "supertest";
import app from "../index";
import Letter from "../models/Letter";
import mongoose from "mongoose";
import {expect} from "chai";
require('dotenv').config();

describe("/api/v1/modify", async () => {

    const letter1 = new Letter({
        'nickname': '행복한 소설가',
        'contents': '훌륭한 소설가는 많지만 훌륭한 수필가는 드물다고. 이유는 간명하다. 그러니까 이번 책은 행복한 작가 공지영의 첫 번째 출사표라고 할 수 있다.',
    })

    await mongoose.connect(MONGODB_URL)

    // given
    await letter1.save()
    const letter1Id = letter1._id.toString()

    it("[POST] 쪽지를 열었지만 삭제하지 않았다", async function() {
        const response = await request(app)
            .post('api/v1/modify')
            .send({
                'id': letter1Id,
                'isOpened': true,
                'isDeleted': false
            })
            .set('Accept', 'application/json')
        console.log(">>>>>>>>>>>>>>>>>>>>>> ", response);
        expect(response.status).eq(200);
    })
})