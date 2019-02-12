
const ProcessCart = require("./ProcessCart");

class ShoppingCart {

  constructor(pricing) {
    this.pricing = pricing;
    this.cartItem = {};
    this.processCart = new ProcessCart(pricing);
  }

  static new(pricingRules) {
    const pricing = Object.assign({}, ...pricingRules.map(object => ({
      [object.productCode]: {
        productName: object.productName,
        price: object.price
      }
    })));
    return new this(pricing);
  }

  add(itemCode, code) {
    if (code) {
      this.code = true
    };
    this.cartItem[itemCode] = this.cartItem[itemCode] ? this.cartItem[itemCode] + 1 : 1;
    this.items = this.processCart.getItems(itemCode);
    this.total = `$${this.processCart.calculateResult(this.cartItem, code)}`;
  }
}

module.exports = ShoppingCart;