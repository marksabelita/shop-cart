class BundledPromos {
  constructor(promo = null){
    const defaultPromo = {
      'ult_medium': { productName: "1 GB Data - pack" }
    };
    
    this.promo = (promo) ? promo : defaultPromo;
  }
}

module.exports = BundledPromos;