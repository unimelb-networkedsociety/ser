'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSubscribe;

describe('Subscribe API:', function() {
  describe('GET /api/subscribes', function() {
    var subscribes;

    beforeEach(function(done) {
      request(app)
        .get('/api/subscribes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          subscribes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(subscribes).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/subscribes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/subscribes')
        .send({
          name: 'New Subscribe',
          info: 'This is the brand new subscribe!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSubscribe = res.body;
          done();
        });
    });

    it('should respond with the newly created subscribe', function() {
      expect(newSubscribe.name).to.equal('New Subscribe');
      expect(newSubscribe.info).to.equal('This is the brand new subscribe!!!');
    });
  });

  describe('GET /api/subscribes/:id', function() {
    var subscribe;

    beforeEach(function(done) {
      request(app)
        .get(`/api/subscribes/${newSubscribe._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          subscribe = res.body;
          done();
        });
    });

    afterEach(function() {
      subscribe = {};
    });

    it('should respond with the requested subscribe', function() {
      expect(subscribe.name).to.equal('New Subscribe');
      expect(subscribe.info).to.equal('This is the brand new subscribe!!!');
    });
  });

  describe('PUT /api/subscribes/:id', function() {
    var updatedSubscribe;

    beforeEach(function(done) {
      request(app)
        .put(`/api/subscribes/${newSubscribe._id}`)
        .send({
          name: 'Updated Subscribe',
          info: 'This is the updated subscribe!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSubscribe = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSubscribe = {};
    });

    it('should respond with the updated subscribe', function() {
      expect(updatedSubscribe.name).to.equal('Updated Subscribe');
      expect(updatedSubscribe.info).to.equal('This is the updated subscribe!!!');
    });

    it('should respond with the updated subscribe on a subsequent GET', function(done) {
      request(app)
        .get(`/api/subscribes/${newSubscribe._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let subscribe = res.body;

          expect(subscribe.name).to.equal('Updated Subscribe');
          expect(subscribe.info).to.equal('This is the updated subscribe!!!');

          done();
        });
    });
  });

  describe('PATCH /api/subscribes/:id', function() {
    var patchedSubscribe;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/subscribes/${newSubscribe._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Subscribe' },
          { op: 'replace', path: '/info', value: 'This is the patched subscribe!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSubscribe = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSubscribe = {};
    });

    it('should respond with the patched subscribe', function() {
      expect(patchedSubscribe.name).to.equal('Patched Subscribe');
      expect(patchedSubscribe.info).to.equal('This is the patched subscribe!!!');
    });
  });

  describe('DELETE /api/subscribes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/subscribes/${newSubscribe._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when subscribe does not exist', function(done) {
      request(app)
        .delete(`/api/subscribes/${newSubscribe._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
