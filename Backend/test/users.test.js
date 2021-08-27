let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Users REST APIs', () => {

    it('Should return status 200 for `/users`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/users')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('Should return status 200 for `/users/:id`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/users/61037cac8693e36df0ea6a49')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

})