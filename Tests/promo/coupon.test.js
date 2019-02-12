const chai = require('chai');
const expect = chai.expect;
const CouponPromo = require('../../Shoping/Promos/Coupon');

describe('Coupon promos', () => {
  it('Should return default coupon promo', () => {
    const couponPromo = new CouponPromo();

    expect(couponPromo.code).to.be.an('object');
    expect(couponPromo.code).to.have.a.property('I<3AMAYSIM');
    expect(couponPromo.code['I<3AMAYSIM']).to.be.equal(10);
  });

  it('Should overide default coupon promo', () => {
    const code = {
      'I<TEST': 2
    };

    const couponPromo = new CouponPromo(code);
    expect(couponPromo.code).to.be.an('object');
    expect(couponPromo.code).to.have.a.property('I<TEST');
    expect(couponPromo.code['I<TEST']).to.be.equal(2);
  });

  it('Should return 90 if totalPrice is 100 and code used is I<3AMAYSIM', () => {
    const code = 'I<3AMAYSIM';
    const totalPrice = 100;

    const couponPromo = new CouponPromo();
    expect(couponPromo.calculate(100, 'I<3AMAYSIM')).to.be.equal(90);
  })
});