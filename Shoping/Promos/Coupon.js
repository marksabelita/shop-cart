class CouponPromos {
  constructor(code = null) {
    const defaultCode = {
      'I<3AMAYSIM': 10
    };
    this.code = (code) ? code : defaultCode; 
  }

  calculate(price, coupon) {
    return price - (price / 100) * this.code[coupon]
  }
}

module.exports = CouponPromos;
