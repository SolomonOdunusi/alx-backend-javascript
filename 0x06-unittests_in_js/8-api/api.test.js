const request = require('request');
const { expect } = require('chai');

describe('Api test', () => {
  it('should return welcome message', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
