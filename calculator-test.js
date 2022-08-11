
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 200000,years:15,rate:.10};
  expect(calculateMonthlyPayment(values)).toEqual('2149.21');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 200000,years:15,rate:.10};
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});

it("should return the values in the input", function(){
  expect(getCurrentUIValues()).toBeInstanceOf(Object);
})

// it("should enter placeholders", function()
//   expect(setupIntialValues()).to)


// update()

// updateMonthly(monthly)