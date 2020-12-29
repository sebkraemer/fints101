// Generated from /Users/sebi/src/hbci101/src/antlr/FinTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FinTSListener = require('./FinTSListener').FinTSListener;
var grammarFileName = "FinTS.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005!\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "\u0014\n\u0002\u0003\u0003\u0006\u0003\u0017\n\u0003\r\u0003\u000e\u0003",
    "\u0018\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002",
    "\u0002\u001d\u0002\f\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002",
    "\u0002\u0002\u0006\u001a\u0003\u0002\u0002\u0002\b\u001c\u0003\u0002",
    "\u0002\u0002\n\u001e\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002",
    "\r\u000e\u0007\u0004\u0002\u0002\u000e\u000f\u0005\u0006\u0004\u0002",
    "\u000f\u0010\u0007\u0004\u0002\u0002\u0010\u0013\u0005\b\u0005\u0002",
    "\u0011\u0012\u0007\u0004\u0002\u0002\u0012\u0014\u0005\n\u0006\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0017\u0007\u0003\u0002\u0002",
    "\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019\u0005\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002",
    "\u001b\u0007\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0005\u0002\u0002",
    "\u001d\t\u0003\u0002\u0002\u0002\u001e\u001f\u0007\u0005\u0002\u0002",
    "\u001f\u000b\u0003\u0002\u0002\u0002\u0004\u0013\u0018"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "':'" ];

var symbolicNames = [ null, "DT_AN", "DEG_SEP", "DT_num" ];

var ruleNames =  [ "segmentkopf", "segmentkennung", "segmentnummer", "segmentversion", 
                   "bezugssegment" ];

function FinTSParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FinTSParser.prototype = Object.create(antlr4.Parser.prototype);
FinTSParser.prototype.constructor = FinTSParser;

Object.defineProperty(FinTSParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FinTSParser.EOF = antlr4.Token.EOF;
FinTSParser.DT_AN = 1;
FinTSParser.DEG_SEP = 2;
FinTSParser.DT_num = 3;

FinTSParser.RULE_segmentkopf = 0;
FinTSParser.RULE_segmentkennung = 1;
FinTSParser.RULE_segmentnummer = 2;
FinTSParser.RULE_segmentversion = 3;
FinTSParser.RULE_bezugssegment = 4;


function SegmentkopfContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FinTSParser.RULE_segmentkopf;
    return this;
}

SegmentkopfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentkopfContext.prototype.constructor = SegmentkopfContext;

SegmentkopfContext.prototype.segmentkennung = function() {
    return this.getTypedRuleContext(SegmentkennungContext,0);
};

SegmentkopfContext.prototype.DEG_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FinTSParser.DEG_SEP);
    } else {
        return this.getToken(FinTSParser.DEG_SEP, i);
    }
};


SegmentkopfContext.prototype.segmentnummer = function() {
    return this.getTypedRuleContext(SegmentnummerContext,0);
};

SegmentkopfContext.prototype.segmentversion = function() {
    return this.getTypedRuleContext(SegmentversionContext,0);
};

SegmentkopfContext.prototype.bezugssegment = function() {
    return this.getTypedRuleContext(BezugssegmentContext,0);
};

SegmentkopfContext.prototype.enterRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.enterSegmentkopf(this);
	}
};

SegmentkopfContext.prototype.exitRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.exitSegmentkopf(this);
	}
};




FinTSParser.SegmentkopfContext = SegmentkopfContext;

FinTSParser.prototype.segmentkopf = function() {

    var localctx = new SegmentkopfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FinTSParser.RULE_segmentkopf);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.segmentkennung();
        this.state = 11;
        this.match(FinTSParser.DEG_SEP);
        this.state = 12;
        this.segmentnummer();
        this.state = 13;
        this.match(FinTSParser.DEG_SEP);
        this.state = 14;
        this.segmentversion();
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FinTSParser.DEG_SEP) {
            this.state = 15;
            this.match(FinTSParser.DEG_SEP);
            this.state = 16;
            this.bezugssegment();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SegmentkennungContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FinTSParser.RULE_segmentkennung;
    return this;
}

SegmentkennungContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentkennungContext.prototype.constructor = SegmentkennungContext;

SegmentkennungContext.prototype.DT_AN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FinTSParser.DT_AN);
    } else {
        return this.getToken(FinTSParser.DT_AN, i);
    }
};


SegmentkennungContext.prototype.enterRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.enterSegmentkennung(this);
	}
};

SegmentkennungContext.prototype.exitRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.exitSegmentkennung(this);
	}
};




FinTSParser.SegmentkennungContext = SegmentkennungContext;

FinTSParser.prototype.segmentkennung = function() {

    var localctx = new SegmentkennungContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FinTSParser.RULE_segmentkennung);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 19;
            this.match(FinTSParser.DT_AN);
            this.state = 22; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FinTSParser.DT_AN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SegmentnummerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FinTSParser.RULE_segmentnummer;
    return this;
}

SegmentnummerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentnummerContext.prototype.constructor = SegmentnummerContext;

SegmentnummerContext.prototype.DT_num = function() {
    return this.getToken(FinTSParser.DT_num, 0);
};

SegmentnummerContext.prototype.enterRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.enterSegmentnummer(this);
	}
};

SegmentnummerContext.prototype.exitRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.exitSegmentnummer(this);
	}
};




FinTSParser.SegmentnummerContext = SegmentnummerContext;

FinTSParser.prototype.segmentnummer = function() {

    var localctx = new SegmentnummerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FinTSParser.RULE_segmentnummer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(FinTSParser.DT_num);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SegmentversionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FinTSParser.RULE_segmentversion;
    return this;
}

SegmentversionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentversionContext.prototype.constructor = SegmentversionContext;

SegmentversionContext.prototype.DT_num = function() {
    return this.getToken(FinTSParser.DT_num, 0);
};

SegmentversionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.enterSegmentversion(this);
	}
};

SegmentversionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.exitSegmentversion(this);
	}
};




FinTSParser.SegmentversionContext = SegmentversionContext;

FinTSParser.prototype.segmentversion = function() {

    var localctx = new SegmentversionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FinTSParser.RULE_segmentversion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(FinTSParser.DT_num);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BezugssegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FinTSParser.RULE_bezugssegment;
    return this;
}

BezugssegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BezugssegmentContext.prototype.constructor = BezugssegmentContext;

BezugssegmentContext.prototype.DT_num = function() {
    return this.getToken(FinTSParser.DT_num, 0);
};

BezugssegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.enterBezugssegment(this);
	}
};

BezugssegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FinTSListener ) {
        listener.exitBezugssegment(this);
	}
};




FinTSParser.BezugssegmentContext = BezugssegmentContext;

FinTSParser.prototype.bezugssegment = function() {

    var localctx = new BezugssegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FinTSParser.RULE_bezugssegment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(FinTSParser.DT_num);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FinTSParser = FinTSParser;
