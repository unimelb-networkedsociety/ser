'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var subscribeCtrlStub = {
  index: 'subscribeCtrl.index',
  show: 'subscribeCtrl.show',
  create: 'subscribeCtrl.create',
  upsert: 'subscribeCtrl.upsert',
  patch: 'subscribeCtrl.patch',
  destroy: 'subscribeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var subscribeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './subscribe.controller': subscribeCtrlStub
});

describe('Subscribe API Router:', function() {
  it('should return an express router instance', function() {
    expect(subscribeIndex).to.equal(routerStub);
  });

  describe('GET /api/subscribes', function() {
    it('should route to subscribe.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'subscribeCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/subscribes/:id', function() {
    it('should route to subscribe.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'subscribeCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/subscribes', function() {
    it('should route to subscribe.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'subscribeCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/subscribes/:id', function() {
    it('should route to subscribe.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'subscribeCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/subscribes/:id', function() {
    it('should route to subscribe.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'subscribeCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/subscribes/:id', function() {
    it('should route to subscribe.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'subscribeCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
