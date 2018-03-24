/**
 * make_poem.js
 * @author
 * @version 03/21/2018
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

  //Testing probablity
  var probability = findProbability(data);
  console.log(probability);
  console.log("--------------------------------------");

  //Testing pick first word
  //console.log("probability " + array_prob[0] + " is:");
  //pickFirstWord(data, array_prob);

  //Testing findCondProbability
  var condProbability = findCondProbability(data);
  console.log(condProbability);

  //Testing pickNextWord


  //Testing makePoem

  //random



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

    console.log(_condWordFreq["blue"]["blue"]);
  }
}

/**
 *
 *
 *
 **/
function findCondProbability(data) {
  var ordered = {};
  var ordered2 = {};
  var _key = {};
  var condWordFrequency;

  condWordFrequency = data_structure.condWordFreq(data);
  console.log(condWordFrequency);

  Object.keys(condWordFrequency).sort().forEach(function(key) {
    Object.keys(condWordFrequency[key]).sort().forEach(function(key2) {
      ordered[key] = condWordFrequency[key][key2];
    });

    //Object.keys(ordered[key]).sort().forEach(function(key2) {
    //  ordered2[key][key2] = ordered[key][key2];
    //});
    /*
    for (_key in ordered[key]) {
      console.log("~~~~~~~~~~~");

      console.log(_key);
      console.log("~~~~~~~~~~~");
    }
    console.log("NEXT OBJECT");
    */
  });

  console.log("\n");
  return ordered;
}

/**
 * Helper method to find the range of probabilities for each word.
 * @requires data_strctures.js - Functions wordFreq and wordCount required.
 * @param {String} data - String containing all of the words in a file.
 * @return {Object} ordered - Sorted object containing the probability
 * range for each word in wordFrequency.
 **/
function findProbability(data) {
  var _key;
  var wordFrequency
  var ordered = {};
  var sum = 0;

  //Sort the object
  wordFrequency = data_structure.wordFreq(data);
  Object.keys(wordFrequency).sort().forEach(function(key) {
    ordered[key] = wordFrequency[key];
  });

  //Create a probablity array for the words.
  for (_key in ordered) {
    sum += ordered[_key];
    ordered[_key] = sum;
  }
  return ordered;
}

/**
 *
 *
 *
 **/
function makePoem() {

}

/**
 * Prints the first word of the poem depending on the probability of all words
 * in the input file and the first probability in the probability array
 * given by the user.
 * @param {String} data - String containing all of the words in a file.
 * @param {Object} array_prob - The array of probabilities given by the user.
 **/
function pickFirstWord(data, array_prob) {
  var key;
  var probability = findProbability(data);

  for (key in probability) {
    if (array_prob[0] <= probability[key]) {
      console.log(key);
      break;
    }
  }
}

/**
 *
 *
 *
 **/
function pickNextWord() {

}

/**
 *
 *
 *
 **/
if (require.main === module) {
  main('rbbrrg_input_text.txt',1,2,3,[0.6,0.2,0.8,0.9,0.4,0.4],false);
}
