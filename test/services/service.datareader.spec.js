'use strict'

var expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server=require("../../src/app/app");

let config = require('../../src/config/config');
let dataReaderService = require('../../src/app/services/service.data.reader');

let should = chai.should();
chai.use(chaiHttp);


describe("Service : Data Reader ", ()=> {
  describe("Get all nearby places : fetchPlaceNearBy", ()=>{
      let places = null;
      let query = {
            location : `-33.8670522,151.1957362`,
            radius :`500`,
            name :`harbour`,
            types : `food`
      }
      beforeEach(async ()=>{
        places = await dataReaderService.fetchPlaceNearBy(query);
      });

      it("should return a list of places", ()=>{
          expect(places.results).to.be.an('Array');
      });

      it("should return 18 nearby places given harbour", ()=>{
          expect(places.results.length).equal(18);
      });
  });

})



