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
function main() {
  //Lets test.
  //Read the file
  var data = fs.readFileSync("rbrbb_input_text.txt", "utf-8").trim();
  console.log("\nShould be : 2 Reds, 3 Blues. Order: RBRBB");

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

//Not sure if this is needed?
if (require.main === module) {
  main();
}
