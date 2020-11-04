var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n);

var reg = /\d+/; //has any numeric characters
console.log(reg.test("123"));
console.log(reg.test("33asd"));
console.log(reg.test("5asdasd"));
console.log(reg.test("asdasd"));

reg = /^\d+$/; // only numeric characters
console.log(reg.test("123"));
console.log(reg.test("123a"));
console.log(reg.test("a"));

console.log('\nFloating Numeric Characters')
reg = /^[0-9]*.[0-9]*[1-9]+$/;
console.log(reg.test("12"));
console.log(reg.test("12.2"));
console.log(reg.test("12.2.3"));

