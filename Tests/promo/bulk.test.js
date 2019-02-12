const chai = require('chai');
const expect = chai.expect;
const BulkPromo = require('../../Shoping/Promos/Bulk');
describe('Bulk promos', () => {
  it('Should return default bulk promo', () => {
    const bulkPromo = new BulkPromo();

    expect(bulkPromo).to.be.an('object');
    expect(bulkPromo.promo).to.have.a.property('ult_large');
    expect(bulkPromo.promo.ult_large.buy).to.be.equal(3);
    expect(bulkPromo.promo.ult_large.less).to.be.equal(5);
  });

  it('Should overide default bulk promo', () => {
    const promoList = {
      'ult_medium': {
        'buy': 1,
        'less': 1
      }
    };
    const bulkPromo = new BulkPromo(promoList);

    expect(bulkPromo).to.be.an('object');
    expect(bulkPromo.promo).to.have.a.property('ult_medium');
    expect(bulkPromo.promo.ult_medium.buy).to.be.equal(1);
    expect(bulkPromo.promo.ult_medium.less).to.be.equal(1);
  })

  it('Should return discount amount of 20 if user purchase 4x using default configuration', () => {
    const bulkPromo = new BulkPromo();
    const promoCode = 'ult_large' 
    const count = 4;

    const discount = bulkPromo.calculate(promoCode, count);
    expect(discount).to.be.equal(20);
  })

})