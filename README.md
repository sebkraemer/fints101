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

Browse [http://localhost:3101](http://localhost:3101). It should show a simple parse
with semanticallz colored output for input `HIBNK:1:1:1`:

![HIBNK in color](docs/img/fints101-hibnk-in-color.png)

If you're reading or even running this, I'd love to hear from you to tell me what you think!
