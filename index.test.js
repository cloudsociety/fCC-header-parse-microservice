var request = require('supertest');
var expect = require('expect');

var {app} = require('./index.js');

describe('index.js', function() {
  it('should return headers object', function(done) {
    request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
      expect(res.body).toIncludeKey('ipaddress');
    })
    .end(done);
  });
});
