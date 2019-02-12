class BulkPromos {
  constructor(promo = null) {
    const defaultPromo = {
      'ult_large': {
        'buy': 3,
        'less': 5
      }
    };
    this.promo = (promo) ? promo : defaultPromo;
  }

  calculate(code, count) {
    let discount = 0;
    if (this.promo[code]) {
      if (count >= this.promo[code].buy) {
        discount = this.promo[code].less * count
      }
    }

    return discount;
  }
}

module.exports = BulkPromos;
