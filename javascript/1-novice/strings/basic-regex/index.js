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

console.log('\nFloating Numeric Characters');
reg = /^[0-9]*.[0-9]*[1-9]+$/;
console.log(reg.test("12"));
console.log(reg.test("12.2"));
console.log(reg.test("12.2.3"));

console.log('\nOnly Alphanumeric Characters');
reg = /[a-zA-Z0-9]/;
console.log(reg.test("somethingELSE"));
console.log(reg.test("hello"));
console.log(reg.test("112a"));
console.log(reg.test("112"));
console.log(reg.test("^"));

console.log('\nRegex Query');
var  uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv' ;
var  queryString =  {};
uri.replace(
    new RegExp ("([^?=&]+)(=([^&]*))?" , "g" ),
    function ($0, $1, $2, $3) { queryString[$1] =  $3; }
);
console.log('ID: ' +  queryString['product_id' ]); // ID: 2140
console.log('Name: ' +  queryString['product_name' ]); // Name: undefined
console.log('Category: ' +  queryString['category' ]); // Category: 4