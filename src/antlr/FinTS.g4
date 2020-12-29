
grammar FinTS;
segmentkopf  : segmentkennung DEG_SEP segmentnummer DEG_SEP segmentversion (DEG_SEP bezugssegment)?;

segmentkennung : DT_AN+ ;
segmentnummer : DT_num ;
segmentversion : DT_num ;
bezugssegment : DT_num ;

DT_AN : [A-Z] ;

// H.1.1 Syntaxzeichen
// DE_SEP : '+' ;
DEG_SEP : ':' ;
// SEG_END : '\'' ;
// SYNTAX_FREIGABE : '?' ;
// SYNTAX_BINAER : '@' ;

// // Datenformate
// DT_dig : [0-9]+ ; // Ziffern
DT_num : '0' | [1-9] [0-9]* ; // Numerisch, keine fuehrenden Nullen
