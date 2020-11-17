var numComparisons = 0;

//find two elements in an array that add up to a target in O(n^2) time
function findSum(array, weight){
    for (var i=0, arrayLength=array.length; i<arrayLength; i++){
        for (var j=i+1; j<arrayLength; j++){
            numComparisons++;
            if(array[i] + array[j]== weight){
                return [i, j];
            }
        }
    }
    return -1;
}

//find two elements in an array that add up to a target in O(n) time - witn O(n) space
function findSumFaster(array, weight){
    var hashtable = {};
    for (var i=0, arrayLength=array.length; i<arrayLength; i++){
        var currentElement = array[i];
        var difference = weight - currentElement;

        numComparisons++;
        if(hashtable[currentElement] != undefined){
            return [i, hashtable[currentElement]];
        }else{
            hashtable[difference] = i;
        }
    }
}


var testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

console.log(findSum(testArray, 59));
console.log(`Number of Comparisons: ${numComparisons}`);

numComparisons = 0;

console.log(findSumFaster(testArray, 59));
console.log(`Number of Comparisons: ${numComparisons}`);