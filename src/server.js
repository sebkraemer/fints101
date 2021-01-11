const { ParserRuleContext } = require('antlr4');
const { TerminalNode } = require('antlr4/tree/Tree');
var http = require('http');
var fints = require('./fints.js');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<!doctype html>\n<html lang="en"> <head></head> <body>\n`);
  const input = "HIBNK:1:1:1"
  res.write(`input: ${input}<br>\n`);

  const parser = fints.getParser(input);
  const voc = parser.vocabulary;
  const treeSegmentkopf = parser.segmentkopf();
  console.log(treeSegmentkopf);
  const treeString = treeSegmentkopf.toStringTree();
  console.log(treeString);
  res.write(`unmodified parse tree for 'segmentkopf' rule via toStringTree(): ${treeString}<br>\n`);

  const parserRules = parser.ruleNames; // relate to ParserRuleContext
  const symbolicNames = parser.symbolicNames; // relate to TerminalNode

  // todo helper function to get rule or parser name as text from index/'type'

  class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }

      if (!ctx.children) {
        return;
      }

      let tagName = 'unknownTag'
      if (ctx instanceof ParserRuleContext) {
        const index = ctx.ruleIndex
        tagName = parserRules[ctx.ruleIndex];
        let result = `\n<span class="${tagName}">`; // ev. use data-* or title tags, too

        ctx.children.forEach(child => {
          const childText = child.getText();
          if (child.children && child.children.length != 0) {
            const childStr = child.toString();
            console.log(`childStr: ${childStr}`);
            result += child.accept(this);
          } else {
            if (child instanceof TerminalNode) {
              const index = child.getSymbol().type; //why is getType() not defined?
              const symbolName = symbolicNames[index];
              //result += ` <${symbolName}>${childText}</${symbolName}> `;
              result += `<span class="${symbolName}">${childText}</span>`;
            }
          }
        });

        return result + `</span> <!-- end of ${tagName} -->\n`;
      }
    }
  }

  const visitResult = treeSegmentkopf.accept(new Visitor());

  res.write(`visitChildren result: \n` + visitResult);
  res.end("<br>\n</body></html>");
}).listen(3101);
