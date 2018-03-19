/**
 * make_poem.js
 * @author
 * @version 03/16/2018
 **/

 //Import file reading and the data_structure algorithms
var data_structure = require("./data_structures.js");
var fs = require("fs");

/**
 * Main function.
 */
function main(file, stanzas, lines, words, array_prob, display) {

  //Lets test.
  //Read the file
  var data = fs.readFileSync(file, "utf-8").trim();
  console.log("\nShould be : 3 Reds, 2 Blues, 1 Green Order: rbbrrg");

  if (display) {
    //Print test results
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

function makePoem() {

}

function pickFirstWord() {

}

function pickNextWord() {

}

//Not sure if this is needed?
if (require.main === module) {
  main('rbbrrg_input_text.txt',1,2,3,[0.6,0.2,0.8,0.9,0.4,0.4],true);
}
