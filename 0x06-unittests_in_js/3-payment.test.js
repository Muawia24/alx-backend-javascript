const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const utilSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilSpy.calculateNumber.callCount).to.be.equal(1);
    utilSpy.calculateNumber.restore();
  });
});


