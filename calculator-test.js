
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({ amount:5000, years:5, rate:2 })).toEqual('833.41');
  expect(calculateMonthlyPayment({ amount:1000, years:3, rate:12 })).toEqual("1000.00");
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({ amount:5000, years:5, rate:2 })).toEqual('833.41');
  expect(calculateMonthlyPayment({ amount:1000, years:3, rate:12 })).toEqual('1000.00');
});

/// etc
