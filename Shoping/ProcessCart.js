const DiscountPromos = require("./Promos/Discount");
const BulkPromos = require("./Promos/Bulk");
const BundledPromos = require("./Promos/Bundled");
const CouponPromos = require("./Promos/Coupon");

class ProcessCart {
  constructor(pricing) {
    this.pricing = pricing;
    this.cartItem = {};
    this.discount = new DiscountPromos();
    this.bulk = new BulkPromos();
    this.bundled = new BundledPromos();
    this.coupon = new CouponPromos();
    this.items = {};
  }

  getItems(itemCode) {
    const productName = this.pricing[itemCode].productName;
    this.items[productName] = this.items[productName] ? this.items[productName] + 1 : 1;

    if (this.bundled.promo[itemCode]) {
      const rewardProductName = this.bundled.promo[itemCode].productName;
      this.items[rewardProductName] = this.items[rewardProductName] ? this.items[rewardProductName] + 1 : 1;
    }

    return this.items;
  }

  calculateResult(cartItem, code = null) {
    let discount = 0;
    let totalPrice = 0;
    let priceResult = 0;
    for (let [code, count] of Object.entries(cartItem)) {
      const price = this.pricing[code].price;
      discount += this.bulk.calculate(code, count);
      discount += this.discount.calculate(code, count, price);
      totalPrice += (count * price)
    }

    priceResult = totalPrice - discount
    if (code) {
      priceResult = this.coupon.calculate(priceResult, code);
    }

    return parseFloat(priceResult).toFixed(2);
  }
}

module.exports = ProcessCart;