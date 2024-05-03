const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('two integer', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(3, 4), 7);
    });
  });

  describe('two round', () => {
    it('should return 8', () => {
      assert.equal(calculateNumber(2.5, 2.5), 6);
    });
  });

  describe('one round', () => {
    it('should return 7', () => {
      assert.equal(calculateNumber(2.5, 4), 7);
    });
  });

  describe('one round2', () => {
    it('should return 7', () => {
      assert.equal(calculateNumber(2, 4.5), 7);
    });
  });

  describe('one round floor', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(2.3, 4), 6);
    });
  } );

  describe('Two round reversed', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.2, 1.2), 4);
    });
  });

  describe('Two round again floor both', function () {
    it('should return 3', function () {
      assert.strictEqual(calculateNumber(1.2, 2.1), 3);
    });
  });

  describe('Two round again floor first', function () {
    it('should return 3', function () {
      assert.strictEqual(calculateNumber(1.2, 2), 3);
    });
  });

  describe('Two round again floor second', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(2, 2.2), 4);
    });
  });

  describe('round top', function () {
    it('should return 18', function () {
      assert.strictEqual(calculateNumber(12.5, 2), 15);
    });
  });
});

