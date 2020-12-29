// Generated from /Users/sebi/src/hbci101/src/antlr/FinTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u0017\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0011\n\u0004\f\u0004\u000e",
    "\u0004\u0014\u000b\u0004\u0005\u0004\u0016\n\u0004\u0002\u0002\u0005",
    "\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002\u0005\u0003\u0002C",
    "\\\u0003\u00023;\u0003\u00022;\u0002\u0018\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000b\u0003\u0002\u0002",
    "\u0002\u0007\u0015\u0003\u0002\u0002\u0002\t\n\t\u0002\u0002\u0002\n",
    "\u0004\u0003\u0002\u0002\u0002\u000b\f\u0007<\u0002\u0002\f\u0006\u0003",
    "\u0002\u0002\u0002\r\u0016\u00072\u0002\u0002\u000e\u0012\t\u0003\u0002",
    "\u0002\u000f\u0011\t\u0004\u0002\u0002\u0010\u000f\u0003\u0002\u0002",
    "\u0002\u0011\u0014\u0003\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002",
    "\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002",
    "\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0015\r\u0003\u0002\u0002",
    "\u0002\u0015\u000e\u0003\u0002\u0002\u0002\u0016\b\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u0012\u0015\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FinTSLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FinTSLexer.prototype = Object.create(antlr4.Lexer.prototype);
FinTSLexer.prototype.constructor = FinTSLexer;

Object.defineProperty(FinTSLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

FinTSLexer.EOF = antlr4.Token.EOF;
FinTSLexer.DT_AN = 1;
FinTSLexer.DEG_SEP = 2;
FinTSLexer.DT_num = 3;

FinTSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FinTSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FinTSLexer.prototype.literalNames = [ null, null, "':'" ];

FinTSLexer.prototype.symbolicNames = [ null, "DT_AN", "DEG_SEP", "DT_num" ];

FinTSLexer.prototype.ruleNames = [ "DT_AN", "DEG_SEP", "DT_num" ];

FinTSLexer.prototype.grammarFileName = "FinTS.g4";


exports.FinTSLexer = FinTSLexer;

