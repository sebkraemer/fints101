const { ParserRuleContext } = require('antlr4');
const { TerminalNode } = require('antlr4/tree/Tree');
var http = require('http');
var fints = require('./fints.js');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const input = "HIBNK:1:1:1"
  res.write(`input: ${input}\n`);

  const parser = fints.getParser(input);
  const voc = parser.vocabulary;
  const treeSegmentkopf = parser.segmentkopf();
  console.log(treeSegmentkopf);
  const treeString = treeSegmentkopf.toStringTree();
  console.log(treeString);
  res.write(`unmodified parse tree for 'segmentkopf' rule via toStringTree(): ${treeString}\n`);

  const parserRules = parser.ruleNames; // relate to ParserRuleContext
  const symbolicNames = parser.symbolicNames; // relate to TerminalNode

  // todo helper function to get rule or parser name as text from index/'type'

  class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }

      let tagName = 'unknownTag'
      if (ctx instanceof ParserRuleContext) {
        const index = ctx.ruleIndex
        tagName = parserRules[ctx.ruleIndex];
      }

      let result = `<${tagName}>`;

      if (ctx.children) {
        ctx.children.forEach(child => {
          const childText = child.getText();
          if (child.children && child.children.length != 0) {
            const childStr = child.toString();
            result += child.accept(this);
          } else {
            if (child instanceof TerminalNode) {
              const index = child.getSymbol().type; //why is getType() not defined?
              const symbolName = symbolicNames[index];
              result += ` <${symbolName}>${childText}</${symbolName}> `;
            }
          }
        });
      }
      return result + `</${tagName}>`;
    }
  }

  const visitResult = treeSegmentkopf.accept(new Visitor());

  res.end(`visitChildren result: \n` + visitResult);
}).listen(3101);
