
var matrix_rotation_check = require("./helpers/matrix_rotation");
var numeric_check = require("./helpers/numeric_check");
var valid_json_check = require("./helpers/json_converter");



test("Matrix_Rotation", () => {
  //arrange and act
  var result = matrix_rotation_check.matrix_rotation(2, 8, [])
  // assert
  expect(result[0].length).toBe(0);
});

test("Numeric Check", () => {
  //arrange and act
  var result = numeric_check.is_numeric(-5)
  // assert
  expect(result).toBe(true);  
});


test("Numeric Check", () => {
  //arrange and act
  var result = numeric_check.is_numeric(4.6)
  // assert
  expect(result).toBe(false);   //test should return false cos i pass a decimal
});

test("Valid Json Check", () => {
  //arrange and act
  var result = valid_json_check.json_converter(4)
  // assert
  expect(result.is_valid).toBe(true);   
});

test("Valid Json Check", () => {
  //arrange and act
  var result = valid_json_check.json_converter("fhfhfhf")
  // assert
  expect(result.is_valid).toBe(false);   
});