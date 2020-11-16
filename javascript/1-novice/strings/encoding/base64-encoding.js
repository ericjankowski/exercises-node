console.log('\nBase64 encoding');
var sentence = 'hello I love learning to computer program';
var encodedSentence = Buffer.from(sentence).toString('base64');
var decodedSentence = Buffer.from(encodedSentence, 'base64').toString();

console.log(`Sentence: ${sentence}`);
console.log(`Encoded Sentence: ${encodedSentence}`);
console.log(`Decoded Sentence: ${decodedSentence}`);