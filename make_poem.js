/**
 * make_poem.js
 * @author
 * @version 03/19/2018
 **/

 //Import file reading and the data_structure algorithms
var data_structure = require("./data_structures.js");
var fs = require("fs");

/**
 * Main function.
 */
function main(file, stanzas, lines, words, array_prob, display) {

  //Read the file
  var data = fs.readFileSync(file, "utf-8").trim();

  var wordFrequency = data_structure.wordFreq(data);
  var probability = findProbability(wordFrequency);

  if (display) {
    //Print test results
    console.log("\nShould be : 3 Reds, 2 Blues, 1 Green Order: rbbrrg");
    console.log("\nThe word count is: ");
    var _wordCount = data_structure.wordCount(data);
    console.log(_wordCount);

    console.log("\nThe word frequency is: ");
    var _wordFreq = data_structure.wordFreq(data);
    console.log(_wordFreq);

    console.log("\nThe conditional word count is: ");
    var _condWordCount = data_structure.condWordCount(data);
    console.log(_condWordCount);

    console.log("\nThe conditional word frequency is: ");
    var _condWordFreq = data_structure.condWordFreq(data);
    console.log(_condWordFreq);
    console.log("");
  }
}

/**
 * Helper method to find the range of probabilities for each word.
 * @param wordFrequency {Object} - Object containing the words and the
 * frequency of those words in which they occur in a text file/String.
 **/
function findProbability(wordFrequency) {
  var _key;
  var ordered = {};
  var probability = {};
  var sum = 0;

  //Sort the object
  Object.keys(wordFrequency).sort().forEach(function(key) {
    ordered[key] = wordFrequency[key];
  });

  //console.log(ordered);
  //console.log(Object.keys(wordFrequency).sort());
  //console.log(wordFrequency);

  //Create a probablity array for the words.
  for (_key in ordered) {
    sum += ordered[_key];
    probability[_key] = sum;
  }
  console.log(probability);
}

function makePoem() {

}

function pickFirstWord() {

}

function pickNextWord() {

}

if (require.main === module) {
  main('rbbrrg_input_text.txt',1,2,3,[0.6,0.2,0.8,0.9,0.4,0.4],false);
}
