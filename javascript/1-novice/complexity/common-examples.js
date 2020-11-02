function exampleLinear(n){
    for (var i = 0; i < n; i++){
        console.log(`i = ${i}`);
    }
}

function exampleQuadratic(n){
    for (var i = 0; i < n; i++){
        console.log(`i = ${i}`);
        for(var j = 0; j < n; j++){
            console.log(`j = ${j}`);
        }
    }
}

function exampleCubic(n){
    for (var i = 0; i < n; i++){
        console.log(`i = ${i}`);
        for(var j = 0; j < n; j++){
            console.log(`j = ${j}`);
            for(var k = 0; k < n; k++){
                console.log(`k = ${k}`);
            }
        }
    }
}

function exampleLogarithmic(n){
    for (var i = 2; i <= n; i = i*2 ){
        console.log(`i = ${i}`);
    }
}
console.log('\n\nLinear Example n=10');
exampleLinear(10);

console.log('\n\nQuadratic Example n=10');
exampleQuadratic(10);

console.log('\n\nCubic Example n=10');
exampleCubic(10);