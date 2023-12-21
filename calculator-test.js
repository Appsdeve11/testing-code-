
it('should calculate the monthly rate correctly', function () {
  // ...
const values = {
  amount: 10000,
  years: 8,
  rate: 5.8
};
expect(calculateMonthlyPayment(values)).toEqual("130.44");
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 6000,
    years: 6,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('93.87');
});

it("should handle terribly high interest rates over a long period of time", function() {
  const values = {
    amount: 1000,
    years: 30,
    rate: 50
  };
  expect(calculateMonthlyPayment(values)).toEqual('4166.67');
});

it("it should handle really small loan amounts", function(){
  const values= {
    amount:4,
    years:3,
    rate:5
  }
expect(calculateMonthlyPayment(values)).toEqual(".12")
});

it("should not give give a payment when anything other than numbers are entered", function(){
const values={
  amount:4000,
  years:2,
  rate:4
}
  expect(calculateMonthlyPayment(values)).toEqual("$Nan")
}

);