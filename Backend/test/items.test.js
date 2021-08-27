let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Items REST APIs', () => {

    it('Should return status 200 for `/items/categories`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/items/categories')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('Should return status 200 for `/items/category/:id`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/items/category/61038e3746b0cd906deef989')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

})