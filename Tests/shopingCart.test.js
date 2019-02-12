const chai = require('chai');
const expect = chai.expect;
const ShopingCart = require('../Shoping/ShopingCart');
const pricingRules = require('./variables.json');
describe('Test Shoping Cart', () => {

  it('Should return total equal to $94.70 and cart item 3x Unlimited 1 gb, 1x Unlimited 5gb', () => {
    const cart = ShopingCart.new(pricingRules);
    cart.add('ult_small');
    cart.add('ult_small');
    cart.add('ult_small');
    cart.add('ult_large');

    expect(cart.total).to.be.equal('$94.70');
    expect(cart.items).to.be.an('object');
    expect(cart.items['Unlimited 1GB']).to.be.equal(3);
    expect(cart.items['Unlimited 5GB']).to.be.equal(1);
  });


  it('Should return total equal to $209.40 and cart item 2x Unlimited 1 gb, 4x Unlimited 1gb', () => {
    const cart = ShopingCart.new(pricingRules);
    cart.add('ult_small');
    cart.add('ult_small');
    cart.add('ult_large');
    cart.add('ult_large');
    cart.add('ult_large');
    cart.add('ult_large');

    expect(cart.total).to.be.equal('$209.40');
    expect(cart.items).to.be.an('object');
    expect(cart.items['Unlimited 1GB']).to.be.equal(2);
    expect(cart.items['Unlimited 5GB']).to.be.equal(4);
  });


  it('Should return total equal to $84.70 and cart item 1x Unlimited 1 gb, 2x Unlimited 2gb , 2x 1 gb data pack', () => {
    const cart = ShopingCart.new(pricingRules);
    cart.add('ult_small');
    cart.add('ult_medium');
    cart.add('ult_medium');

    expect(cart.total).to.be.equal('$84.70');
    expect(cart.items).to.be.an('object');
    expect(cart.items['Unlimited 1GB']).to.be.equal(1);
    expect(cart.items['Unlimited 2GB']).to.be.equal(2);
    expect(cart.items['1 GB Data - pack']).to.be.equal(2);
  });

  it('Should return total equal to $31.32 and cart item 1x Unlimited 1 gb, 1x 1 gb data pack', () => {
    const cart = ShopingCart.new(pricingRules);
    cart.add('1gb');
    cart.add('ult_small', 'I<3AMAYSIM');

    expect(cart.total).to.be.equal('$31.32');
    expect(cart.items['Unlimited 1GB']).to.be.equal(1);
    expect(cart.items['1 GB Data - pack']).to.be.equal(1);
  });
});