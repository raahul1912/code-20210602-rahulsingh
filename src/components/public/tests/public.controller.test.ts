import { expect, use, request } from "chai";
import chaiHttp from "chai-http";
use(chaiHttp);
import app from "../../../app";

const server = app;


//Our parent block
describe('BMI Calculator', () => {
    describe('calculateBMI', () => {
        it('it should calculate BMI', (done) => {
            request(server)
                .post('/public/api/v1/calculateBMI')
                .send({
                    "rawData": [
                        {
                            "Gender": "Male",
                            "HeightCm": 171,
                            "WeightKg": 96
                        }
                    ]
                })
                .end((err, res) => {
                    expect(res.body.status).to.equal(200);
                    done();
                });
        });
    });
});