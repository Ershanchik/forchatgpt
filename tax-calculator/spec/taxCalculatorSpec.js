const {calculateTax}=require("../taxCalculator");
describe("Tax Calculator",()=>{
  it("calculates 10 percent of 1000",()=>{expect(calculateTax(1000,10)).toBe(100);});
  it("returns zero for zero income",()=>{expect(calculateTax(0,10)).toBe(0);});
  it("returns zero for a zero tax rate",()=>{expect(calculateTax(1000,0)).toBe(0);});
  it("supports fractional percentages",()=>{expect(calculateTax(850,7.5)).toBe(63.75);});
  it("accepts a 100 percent tax rate",()=>{expect(calculateTax(100,100)).toBe(100);});
  it("rejects negative income",()=>{expect(()=>calculateTax(-10,5)).toThrowError(RangeError);});
  it("rejects rates above 100",()=>{expect(()=>calculateTax(100,120)).toThrowError(RangeError);});
});
