const ShopingCart = require('./Shoping/ShopingCart')

const pricingRules = [{
    productCode: "ult_small",
    productName: "Unlimited 1GB",
    price: 24.90
  },
  {
    productCode: "ult_medium",
    productName: "Unlimited 2GB",
    price: 29.90
  },
  {
    productCode: "ult_large",
    productName: "Unlimited 5GB",
    price: 44.90,
  },
  {
    productCode: "1gb",
    productName: "1 GB Data - pack",
    price: 9.90
  }
];

const cart = ShopingCart.new(pricingRules);
cart.add('ult_small');
cart.add('ult_small');
cart.add('ult_small');
cart.add('ult_large');

const cart2 = ShopingCart.new(pricingRules);
cart2.add('ult_small');
cart2.add('ult_small');
cart2.add('ult_large');
cart2.add('ult_large');
cart2.add('ult_large');
cart2.add('ult_large');

const cart3 = ShopingCart.new(pricingRules);
cart3.add('ult_small');
cart3.add('ult_medium');
cart3.add('ult_medium');

const cart4 = ShopingCart.new(pricingRules);
cart4.add('1gb');
cart4.add('ult_small', 'I<3AMAYSIM');

console.log(cart.items);
console.log(cart.total);

console.log(cart2.items);
console.log(cart2.total);

console.log(cart3.items);
console.log(cart3.total);

console.log(cart4.items);
console.log(cart4.total);
