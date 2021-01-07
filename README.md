# About

This project is my little playground for
- teaching myself web development
- creating a tool for FinTS message inspection

You can read more about it [in my blog](http://fints101.com).

# Setup

_Disclaimer: I feel free to not keep this up to date at all times, sorry._

- npm/JS
- If you want to generate (modify) the existing grammar
  - java (runtime only)
  - antlr (refer to the [homepage](antlr.org/))
  - "ANTLR4 grammar syntax support" VS Code extension (generates files on save) (comes with its own antlr runtime!)

# Run it!

If you want/need to generate the parser files:

```bash
pushd src/antlr
antlr4 -Dlanguage=JavaScript FinTS.g4
popd
```

Run the application:

```bash
npm start
```

Browse [http://localhost:3101](http://localhost:3101). It should show a simple parse:

```
input: HIBNK:1:1:1
unmodified parse tree for 'segmentkopf' rule via toStringTree(): ([] ([10] H I B N K) : ([12] 1) : ([14] 1) : ([16] 1))
visitChildren result: 

<segmentkopf>
<segmentkennung> <DT_AN>H</DT_AN>  <DT_AN>I</DT_AN>  <DT_AN>B</DT_AN>  <DT_AN>N</DT_AN>  <DT_AN>K</DT_AN> </segmentkennung>
 <DEG_SEP>:</DEG_SEP> 
<segmentnummer> <DT_num>1</DT_num> </segmentnummer>
 <DEG_SEP>:</DEG_SEP> 
<segmentversion> <DT_num>1</DT_num> </segmentversion>
 <DEG_SEP>:</DEG_SEP> 
<bezugssegment> <DT_num>1</DT_num> </bezugssegment>
</segmentkopf>
```

If you're reading or even running this, I'd love to hear from you to tell me what you think!
