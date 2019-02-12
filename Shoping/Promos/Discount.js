class DiscountPromos {
  constructor(promo = null) {
    const defaultPromo =  {
      'ult_small': {
        'buy': 3,
        'pay': 2
      }
    };
    this.promo = (promo) ? promo : defaultPromo;
  }

  calculate(code, count, price) {
    const totalPrice = count * price;
    let discount = 0;

    if (this.promo[code]) {
      const qoutient = parseInt(count / this.promo[code].buy);
      const remainder = count % this.promo[code].buy;
      const totalCount = (qoutient * this.promo[code].pay) + remainder;
      const disCountedPrice = (totalCount * price);
      discount = totalPrice - disCountedPrice;
    }

    return discount;
  }
}

module.exports = DiscountPromos;
