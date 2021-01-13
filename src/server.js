const { ParserRuleContext } = require('antlr4');
const { TerminalNode } = require('antlr4/tree/Tree');
var http = require('http');
var fs = require('fs');
var fints = require('./fints.js');

http.createServer(function (req, res) {
  if (req.url === '/style.css') {
    fs.readFile('./src/style.css', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!doctype html>\n<html lang="en"> <head>
      <title>FinTS 101</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
      </head>\n<body>\n`);
    const input = "HIBNK:1:1:1"
    res.write(`input: ${input}<br>\n`);

    const parser = fints.getParser(input);
    const voc = parser.vocabulary;
    const treeSegmentkopf = parser.segmentkopf();
    const treeString = treeSegmentkopf.toStringTree();
    console.log(treeString);
    res.write(`unmodified parse tree for 'segmentkopf' rule via toStringTree(): ${treeString}<br>\n`);

    const parserRules = parser.ruleNames; // relates to ParserRuleContext
    const symbolicNames = parser.symbolicNames; // relates to TerminalNode

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
              result += child.accept(this);
            } else {
              if (child instanceof TerminalNode) {
                const index = child.getSymbol().type;
                const symbolName = symbolicNames[index];
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
  }
}).listen(3101);
