//substring
var animalString = 'dog';

console.log(animalString.charAt(1) + '\n');

var name = 'YouTube';
console.log(name.substring(1, 2));
console.log(name.substring(3, 7));
console.log(name.substring(1));

//indexOf

var title = 'Red Dragon';

console.log(title.indexOf('Red'));
console.log(title.indexOf('RedScale'));
console.log(title.indexOf('Dragon', 0));
console.log(title.indexOf('Dragon', 4));
console.log(title.indexOf('', 9));

//startsWith and endsWith

console.log(title.startsWith('Red'));
console.log(title.endsWith('Dragon'));
console.log(title.startsWith('Dragon'));
console.log(title.endsWith('Red'));

//decomposition with split();

var test1 = 'chicken,noodle,soup,broth';
console.log(test1.split(','));

var test2 = 'chicken';
console.log(test2.split(""));

// replace
title = 'Wizard of Oz';
console.log(title.replace('Wizard', 'Witch'));
