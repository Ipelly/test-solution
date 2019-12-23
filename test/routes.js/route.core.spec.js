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

    describe("GET All users properties", ()=>{

  
        it('should return a list of properties', (done)=> {
            request.get('/properties')
                .expect(200)
                .end(function(err, res) {
                    console.log(res.body.properties)
                    expect(res.body.properties).to.be.an('Array');
                    done(err);
            });
        });

        it('should return a msg', (done)=> {
            request.get('/watch')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.Message).to.be.an('string');
                    done(err);
            });
        });
        
    });

})
