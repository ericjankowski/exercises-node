
console.log('map');
console.log(
    [1,2,3,4,5,6,7].map((value) => value*10)
);

//filter
console.log('\n\nfilter');
console.log(
    [100,2003,10,203,333,12].filter((value) => value > 100)
);

//reduce
console.log('\n\nreduce');
console.log(
    [0,1,2,3,4].reduce((prevVal, currentVal, index, array) => prevVal + currentVal)
);