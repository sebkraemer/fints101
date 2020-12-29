// Generated from /Users/sebi/src/hbci101/src/antlr/FinTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FinTSParser.
function FinTSListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FinTSListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FinTSListener.prototype.constructor = FinTSListener;

// Enter a parse tree produced by FinTSParser#segmentkopf.
FinTSListener.prototype.enterSegmentkopf = function(ctx) {
};

// Exit a parse tree produced by FinTSParser#segmentkopf.
FinTSListener.prototype.exitSegmentkopf = function(ctx) {
};


// Enter a parse tree produced by FinTSParser#segmentkennung.
FinTSListener.prototype.enterSegmentkennung = function(ctx) {
};

// Exit a parse tree produced by FinTSParser#segmentkennung.
FinTSListener.prototype.exitSegmentkennung = function(ctx) {
};


// Enter a parse tree produced by FinTSParser#segmentnummer.
FinTSListener.prototype.enterSegmentnummer = function(ctx) {
};

// Exit a parse tree produced by FinTSParser#segmentnummer.
FinTSListener.prototype.exitSegmentnummer = function(ctx) {
};


// Enter a parse tree produced by FinTSParser#segmentversion.
FinTSListener.prototype.enterSegmentversion = function(ctx) {
};

// Exit a parse tree produced by FinTSParser#segmentversion.
FinTSListener.prototype.exitSegmentversion = function(ctx) {
};


// Enter a parse tree produced by FinTSParser#bezugssegment.
FinTSListener.prototype.enterBezugssegment = function(ctx) {
};

// Exit a parse tree produced by FinTSParser#bezugssegment.
FinTSListener.prototype.exitBezugssegment = function(ctx) {
};



exports.FinTSListener = FinTSListener;