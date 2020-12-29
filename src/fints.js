var antlr4 = require('antlr4/index');
var FinTSLexer = require('./antlr/FinTSLexer.js').FinTSLexer;
var FinTSParser = require('./antlr/FinTSParser.js').FinTSParser;
//var FinTSListener = require('./antlr/FinTSListener.js').FinTSListener;

function getParser(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new FinTSLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FinTSParser(tokens);
    parser.buildParseTrees = true;
    return parser;
}

module.exports.getParser = getParser;
