var http = require('http');

var fints = require('./fints.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const input = "HIBNK:1:1:1"

  const parser = fints.getParser(input);
  const voc = parser.vocabulary;
  const treeSegmentkopf = parser.segmentkopf();
  console.log(treeSegmentkopf);
  const treeString = treeSegmentkopf.toStringTree();
  console.log(treeString);

  // some debug
  const testText = treeSegmentkopf.children[1].getText();
  console.log(testText);
  const testSymbol = treeSegmentkopf.children[1].getSymbol();
  const tokentype = testSymbol.type; //why is getType() not defined?
  console.log(testSymbol);

  res.end(treeString);
}).listen(3101);
