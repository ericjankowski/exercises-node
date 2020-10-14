const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    getTitles(response);
}).listen(8000,'127.0.0.1');

function getTitles(response){
    fs.readFile('./titles.json', (err, data) => {
        if(error){
            return hadError(err);
        }
        getTemplate(JSON.parse(data.toString()), response);
        
    });
}

function getTemplate(titles, response){
    fs.readFile('./template.html', (err, data) => {
        if(error){
            return hadError(err);
        }
        formatHtml(titles, data.toString(), response);
        
    });
}

function formatHtml(titles, template, response){
    const html = template.replace('%', titles.join('</li><li>'));
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(html);
}

function hadError(error, response) {
    console.error(error);
    response.end('Server Error')
}