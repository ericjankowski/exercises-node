var array1 = [1, 2, 3, 4];

//Adding in O(1) time
array1.push(5);
array1.push(7);
array1.push(2);
console.log(array1);

//removing in O(1) time
array1 = [1, 2, 3, 4];
console.log('\n\n' + array1.pop());
console.log(array1);
console.log(array1.pop());
console.log(array1);

//Accessing in O(1) time
array1 = [1, 2, 3, 4];
console.log('\n\n' + array1[0]);
console.log(array1[1]);

//Iterating in O(n) time
console.log('\n\n');
for(var i = 0, len=array1.length; i<len; i++){
    console.log(array1[i]);
}

console.log('\n\n');
var counter=0;
while(counter<array1.length){
    // insert code here
    counter++;
}
console.log(counter);

//for(in)
console.log('\n\n');
array2 = ['all','cows','eat','grass'];
for (var index in array2){
    console.log(index + ' ' + array2[index]);
}

//for(of)
console.log('\n\n');
array2 = ['all','cows','eat','grass'];
for (var element of array2){
    console.log(element);
}

//forEach
console.log('\n\nForEach');
array2.forEach((element, index) => {
    console.log(element);
});

//slice
console.log('\n\nSlice');
console.log(array1.slice(1,2));
console.log(array1.slice(2,4));

//referential variables
console.log('\n\nReferential Variables');
var array1 = [1,2,3,4],
array2 = array1;

console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

array2[0] = 5;

console.log(array1); // [5,2,3,4]
console.log(array2); // [5,2,3,4]