let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Product REST APIs', () => {

    it('Should return status 200 for `/products`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/products')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('Should return status 200 for `/products/:id`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/products/61033f9ae2ae5d2c20111d53')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

})