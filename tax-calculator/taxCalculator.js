function calculateTax(income, rate) {
  const amount=Number(income);
  const percentage=Number(rate);
  if(!Number.isFinite(amount)||amount<0){
    throw new RangeError("Income must be a non-negative number");
  }
  if(!Number.isFinite(percentage)||percentage<0||percentage>100){
    throw new RangeError("Tax rate must be between 0 and 100");
  }
  return Math.round((amount*percentage/100+Number.EPSILON)*100)/100;
}
if(typeof module!=="undefined"&&module.exports){
  module.exports={calculateTax};
}
if(typeof window!=="undefined"){
  window.calculateTax=calculateTax;
}
