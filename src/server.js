var http = require('http');
var fints = require('./fints.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const input = "HIBNK:1:1:1"
  res.write(`input: ${input}\n`);

  const parser = fints.getParser(input);
  const voc = parser.vocabulary;
  const treeSegmentkopf = parser.segmentkopf();
  console.log(treeSegmentkopf);
  const treeString = treeSegmentkopf.toStringTree();
  console.log(treeString);
  res.write(`unmodified parse tree for 'segmentkopf' rule via toStringTree(): ${treeString}\n`);

  // some debug
  const theChild = treeSegmentkopf.children[1].toString();
  const testText = treeSegmentkopf.children[1].getText();
  console.log(testText);
  const testSymbol = treeSegmentkopf.children[1].getSymbol();
  const tokentype = testSymbol.type; //why is getType() not defined?
  console.log(testSymbol);

  class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }
  
  const visitResult = treeSegmentkopf.accept(new Visitor());

  res.end(`visitChildren result: ` + JSON.stringify(visitResult));
}).listen(3101);
