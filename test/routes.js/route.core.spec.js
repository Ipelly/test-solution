'use strict'


let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiAsPromised = require('chai-as-promised');
let supertest = require('supertest');
let server=require("../../src/app/app");

global.app = server;
global.expect = chai.expect;
global.request = supertest(app);



describe("Route : API Endpoint Inegration test", ()=> {

    describe("GET All nearby places", ()=>{

  
        it('should return a list of places', (done)=> {
            request.get('/places?location=-33.8670522,151.1957362&radius=500&name=harbour&types=all')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.places).to.be.an('Array');
                    done(err);
            });
        });
        
        it('should return 18 nearby places given harbour', (done)=> {
            request.get('/places?location=-33.8670522,151.1957362&radius=500&name=harbour&types=all')
                .expect(200)
                .end((err, res)=> {
                    expect(res.body.places).to.have.lengthOf(18);
                    done(err);
            });
        });
    });

})
