const chai = require('chai');
const expect = chai.expect;
const DiscountPromo = require('../../Shoping/Promos/Discount');

describe('Discount promos', () => {

  it('Should return default discount promo', () => {
    const discountPromo = new DiscountPromo();

    expect(discountPromo).to.be.an('object');
    expect(discountPromo.promo).to.have.a.property('ult_small');
    expect(discountPromo.promo.ult_small.buy).to.be.equal(3);
    expect(discountPromo.promo.ult_small.pay).to.be.equal(2);
  });

  it('Should overide default discount promo', () => {
    const promo = {
      'ult_medium': {
        'buy': 3,
        'pay': 1
      }
    };
    const discountPromo = new DiscountPromo(promo);

    expect(discountPromo).to.be.an('object');
    expect(discountPromo.promo).to.have.a.property('ult_medium');
    expect(discountPromo.promo.ult_medium.buy).to.be.equal(3);
    expect(discountPromo.promo.ult_medium.pay).to.be.equal(1);
  });

  it('Should return discount of $24.90 if purchased 3x ult_small', () => {
    const discountPromo = new DiscountPromo();
    const discountResult = parseFloat(discountPromo.calculate('ult_small', 3, 24.90)).toFixed(2);
    expect(discountResult).to.be.equal('24.90');
  })
});