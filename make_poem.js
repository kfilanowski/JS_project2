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

  console.log("\nTesting probablity");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  var probability = findProbability(data);
  console.log(probability);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

  console.log("Testing pick first word");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("probability " + array_prob[0] + " is:");
  pickFirstWord(data, array_prob);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

  console.log("Testing findCondProbability");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  var condProbability = findCondProbability(data);
  console.log(condProbability);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

  //console.log("Testing pickNextWord");


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
  var _key;
  var ordered      = {};
  var value_object = {};
  var key_array    = [];
  var condWordFrequency = data_structure.condWordFreq(data);

  Object.keys(condWordFrequency).sort().forEach(function(key) {
    //Sort all the keys (not values), and assign it to a new object.
    ordered[key] = condWordFrequency[key];

    //Store the value's keys
    for (_key in ordered[key]) key_array.push(_key);

    //Sort the keys alphabetically.
    key_array.sort();

    //Create a new sorted value-key object.
    for (var i in key_array) {
      value_object[key_array[i]] = ordered[key][key_array[i]];
    }

    //Assign the ordered values to the proper location.
    ordered[key] = value_object;

    //Reset for the next iteration.
    value_object = {};
    key_array = [];
  });
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
