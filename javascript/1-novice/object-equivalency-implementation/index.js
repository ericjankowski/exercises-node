function isEquivalent(a, b){
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if(aProps.length != bProps.length){
        return false;
    }

    for(var i = 0; i<aProps.length; i++){
        var propName = aProps[i];

        if(a[propName] !== b[propName]){
            return false;
        }
    }
    return true;
}

console.log(isEquivalent({'hi':12},{'hi':12}));
console.log(isEquivalent({'hi':12},{'hi':13}));
console.log(isEquivalent(
    {'prop1': 'test', 'prop2': function(){}},
    {'prop1': 'test', 'prop2': function(){}}
));