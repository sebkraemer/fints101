var antlr4 = require('antlr4/index');
var FinTSLexer = require('./antlr/FinTSLexer.js').FinTSLexer;
var FinTSParser = require('./antlr/FinTSParser.js').FinTSParser;

function getParser(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new FinTSLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new FinTSParser(tokens);
  parser.buildParseTrees = true;
  return parser;
}

const ParserRuleContext = require('antlr4').ParserRuleContext;
const TerminalNode = require('antlr4/tree/Tree').TerminalNode;

class HtmlVisitor {

  constructor(ruleNames, symbolicNames) {
    this.ruleNames = ruleNames;
    this.symbolicNames = symbolicNames;
  }

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
      tagName = this.ruleNames[ctx.ruleIndex];
      let result = `\n<span class="${tagName}">`; // ev. use data-* or title tags, too

      ctx.children.forEach(child => {
        const childText = child.getText();
        if (child.children && child.children.length != 0) {
          const childStr = child.toString();
          result += child.accept(this);
        } else {
          if (child instanceof TerminalNode) {
            const index = child.getSymbol().type;
            const symbolName = this.symbolicNames[index];
            result += `<span class="${symbolName}">${childText}</span>`;
          }
        }
      });

      return result + `</span> <!-- end of ${tagName} -->\n`;
    }
  }
}

module.exports.getParser = getParser;
module.exports.HtmlVisitor = HtmlVisitor;
