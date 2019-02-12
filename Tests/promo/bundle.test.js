const chai = require('chai');
const expect = chai.expect;
const BundlePromo = require('../../Shoping/Promos/Bundled');

describe('Bundled promos', () => {
  it('Should return default bundle promo', () => {
    const bundlePromo = new BundlePromo();

    expect(bundlePromo).to.be.an('object');
    expect(bundlePromo.promo).to.have.a.property('ult_medium');
    expect(bundlePromo.promo.ult_medium.productName).to.be.equal("1 GB Data - pack");
  });

  it('Should overide default bundle promo', () => {
    const bundled = {
      'ult_large': { productName: "Unlimited 5GB" }
    };

    const bundlePromo = new BundlePromo(bundled);
    expect(bundlePromo).to.be.an('object');
    expect(bundlePromo.promo).to.have.a.property('ult_large');
    expect(bundlePromo.promo.ult_large.productName).to.be.equal("Unlimited 5GB");
  })
});