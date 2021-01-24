const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
const fints = require('./fints.js');

http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true);
  if (req.url === '/style.css') {
    // send CSS
    fs.readFile('./src/style.css', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
  else if (req.method === "GET" && reqUrl.pathname === "/parse") {
    // parse form data and send result html
    console.log("parse!!")
    const parseData = reqUrl.query;

    const input = parseData.fintsInput; // e.g. "HIBNK:1:1:1"
    const parser = fints.getParser(input);
    const treeSegmentkopf = parser.segmentkopf();
    const treeString = treeSegmentkopf.toStringTree();
    console.debug(`unmodified parse tree for 'segmentkopf' rule via toStringTree(): ${treeString}<br>\n`);

    const ruleNames = parser.ruleNames; // relates to ParserRuleContext
    const symbolicNames = parser.symbolicNames; // relates to TerminalNode
    const visitResult = treeSegmentkopf.accept(new fints.HtmlVisitor(ruleNames, symbolicNames));

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(visitResult);
    res.end();
  }
  else {
    // send main page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!doctype html>\n<html lang="en"> <head>
      <title>FinTS 101</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
      </head>\n<body>\n
      <p>Welcome to FinTS101.</p>

      <label for="fintsInputArea">FinTS message</label>
      <form id="fintsForm">
      <textarea id="fintsInputArea" name="fintsInput" rows="10" cols="80" padding="3" autofocus>HIBNK:1:1:1</textarea>
      <p>
      <button type="submit" name="submitButton" value="Submit">Submit</button>
      <button type="reset" name="resetButton" value="Reset">Reset</button>
      </form>
      
      <p>
      <div id="resultDiv"></div>
      <p>
      <div id="resultStatus"></div>

      <script type="text/javascript">
        const form = document.getElementById("fintsForm");
        const sb = form.elements["submitButton"];
        sb.addEventListener("click", event => {
          // document.getElementById("resultDiv").innerHTML = form.elements["fintsInputArea"].value;
          // document.getElementById("resultStatus").innerHTML = "clicked";
          event.preventDefault();

          const parseInput = form.elements["fintsInputArea"].value;
          const request = new Request("/parse?fintsInput=" + encodeURIComponent(parseInput) );
          fetch(request)
          .then( responseData => { return responseData.text(); } )
          .then( parseResult => {
            let resultDiv = document.getElementById("resultDiv");
            resultDiv.innerHTML = parseResult;
          });
        });
      </script>
      `);
    res.end("<br>\n</body></html>");
  }
}).listen(3101);
