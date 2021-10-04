let dollars = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  function FormatPrice(priceInCents) {
    return dollars.format(priceInCents / 100);
  }
  
  export default FormatPrice;