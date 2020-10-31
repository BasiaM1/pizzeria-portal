/* global require, process */

const fs = require('fs'); //wbudowane w node pakiety: fs(file system) i path -służy do modyfikacji, konwersji sciezek do plikow
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: 'build',
  noCors: false,
});
const port = process.env.PORT || 3131;

//dotyczy backendu, pakietu express, jeżeli url zaczyna się od /panel to ma być zwrócony plik z aktalogu build, jeżeli nie ma takiego pliku to ma być zwrócony index.html z katalogu build
server.get(/^\/panel.*/, (req,res) =>{
  if(req.url === '/panel'){
    req.url += '/';
  }
  const filePath = __dirname+req.url.replace('/panel', '/build');
  if(fs.existsSync(filePath)){
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  }
});

//spr czy żądany adres ma przedrostek /api, jeśli tak to zapytanie zostanie obsłużone przez json server, jesli to nie jest zapytanie do api to chcemy potraktować to zapytanie tak jakby dotyczyło ono podkatalogu front w katalogu build
server.use(function(req, res, next) {
  const api = /^\/api(.*)$/.exec(req.url);

  if (api && api.length > 1) {
    req.url = api[1] || '/';
  } else {
    req.url = '/front' + req.url;
  }
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
