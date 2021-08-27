let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Admin REST APIs', () => {

    it('Should return status 200 for `/admin/products`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/admin/products')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('Should return status 200 for `/admin/product/:id`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/admin/product/61033f9ae2ae5d2c20111d53')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    // it('Should return status 200 for posting new product on `/admin/addProduct`', (done) => {
    //     product = {
    //         "category_name" : "Home Appliances",
    //         "name" : "Samsung 28 cu.ft.- Refrigerator - Stainless Steel",
    //         "description" : "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    //         "price" : 1799.99,
    //         "discounted_price" : 10,
    //         "image" : "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/pdp/rf28t5001/rf28t5001sr-aa/gallery/RF28T5001SR_01_Silver_Scom.jpg?$product-details-jpg$",
    //         "rating" : 18,
    //     }
    //     chai
    //         .request('http://localhost:8080')
    //         .post('/admin/addProduct', product)
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // })

    // it('Should return status 200 for put product on `/admin/updateProduct/:id`', (done) => {
    //     id = "61033f9ae2ae5d2c20111d53";
    //     product = {
    //                 "category_name" : "Home Appliances",
    //                 "name" : "Samsung 28 cu.ft.- Refrigerator",
    //                 "description" : "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    //                 "price" : 1799.99,
    //                 "discounted_price" : 10,
    //                 "image" : "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/pdp/rf28t5001/rf28t5001sr-aa/gallery/RF28T5001SR_01_Silver_Scom.jpg?$product-details-jpg$",
    //                 "rating" : 18,
    //             } 
    //     chai
    //         .request('http://localhost:8080')
    //         .put('/admin/updateProduct/'+id, product)
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // })

    // it('Should return status 200 for `/admin/deleteProduct/:id`', (done) => {
    //     id = "61033f9ae2ae5d2c20111d53";
    //     chai
    //         .request('http://localhost:8080')
    //         .delete('/admin/deleteProduct/'+id)
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // })

    it('Should return status 200 for `/admin/orders`', (done) => {
        chai
            .request('http://localhost:8080')
            .get('/admin/orders')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    // it('Should return status 200 for `/admin/order/:id`', (done) => {
    //     chai
    //         .request('http://localhost:8080')
    //         .get('/admin/order/6103bca81c071b0d80451a9d')
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // });

    // it('Should return status 200 for put order on `/admin/updateOrder/:id`', (done) => {
    //     id = "6103bca81c071b0d80451a9d";
    //     order = {
    //         "_id" : ObjectId("6103bca81c071b0d80451a9d"),
    //         "orderPlacedOn" : "Fri Jul 30 2021 04:24:01 GMT-0400 (Eastern Daylight Time)",
    //         "isDelivered" : true,
    //         "cart" : [
    //                 {
    //                         "_id" : "61033edee2ae5d2c20111d33",
    //                         "category_name" : "Video Games/VR",
    //                         "name" : "Oculus Rift-S - 8GB Memory",
    //                         "description" : "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    //                         "price" : 979.99,
    //                         "discounted_price" : 10,
    //                         "image" : "http://www.vesaro.com/store/pc/catalog/Oculus-Rift-S-Detail.jpg",
    //                         "rating" : 2,
    //                         "created_on" : "2021-07-29T23:50:54.303Z",
    //                         "__v" : 0
    //                 },
    //                 {
    //                         "_id" : "61033ed2e2ae5d2c20111d31",
    //                         "category_name" : "Laptops",
    //                         "name" : "MacBook Air 13.3 - 8GB Memory - 512GB",
    //                         "description" : "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    //                         "price" : 1500.99,
    //                         "discounted_price" : 10,
    //                         "image" : "https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png",
    //                         "rating" : 1,
    //                         "created_on" : "2021-07-29T23:50:42.733Z",
    //                         "__v" : 0
    //                 },
    //                 {
    //                         "_id" : "61033f08e2ae5d2c20111d39",
    //                         "category_name" : "Tablets",
    //                         "name" : "iPad Air - 4GB Memory - 256GB ",
    //                         "description" : "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    //                         "price" : 1199.99,
    //                         "discounted_price" : 10,
    //                         "image" : "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/09/ipad-air-2020-hero.jpg",
    //                         "rating" : 5,
    //                         "created_on" : "2021-07-29T23:51:36.626Z",
    //                         "__v" : 0
    //                 }
    //         ],
    //         "email" : "dbg@g.co",
    //         "total" : 3680.9700000000003,
    //         "__v" : 0
    //     } 
    //     chai
    //         .request('http://localhost:8080')
    //         .put('/admin/updateOrder/'+id, order)
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // })

    //  it('Should return status 200 for `/admin/deleteOrder/:id`', (done) => {
    //     id = "6103bca81c071b0d80451a9d";
    //     chai
    //         .request('http://localhost:8080')
    //         .delete('/admin/deleteOrder/'+id)
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })
    // })

})