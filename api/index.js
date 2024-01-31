// 2024-02-01 00:27:57
// run this api server with
// console]# node index.js

import http from "http";
import fs from "fs";

async function chunk(req, res) {
  // response with 5 chunks..
  const iterateCount = 5;
  // header reply
  res.writeHead(200, {
    "content-type": "text/plain",
    "content-length": iterateCount * 8,
  });
  // chunks with 1sec delay
  for await (const i of Array(iterateCount).keys()) {
    res.write(`chunk ${i}.`);
    await new Promise((res) => setTimeout(res, 1000));
    console.log(`chunk ${i}. 전달함`);
  }
  // end of replies..
  res.end();
}

function upload(req, res) {
  res.writeHead(200, {
    "content-type": "text/plain",
  });
  res.end("success");
}

function index(req, res) {
  fs.readFile("./index.html", (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error");
      return;
    }

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  console.log(req.url);

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === "/chunk") return chunk(req, res);
  if (pathname === "/upload") return upload(req, res);
  return index(req, res);
});

server.listen(3000, () => {
  console.log("server is running ::3000");
});
