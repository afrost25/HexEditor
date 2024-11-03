const http = require('http')
const path = require('path')
const fs = require('fs').promises;

const PORT  = 3000;

const server = http.createServer((req, res) =>
{
    if(req.method === 'GET')
    {
        if(req.url === '/')
        {
            sendPublicFile('index.html', res);
        }
        else
        {
            sendPublicFile(req.url, res);
        }

    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/text');
        res.end("Webpage Not Found");
    }
});

const mimeTypes =
{
    '.html' : 'text/html',
    '.mjs' : 'application/javascript',
    '.css' : 'text/css',
}

function sendPublicFile(fileName, res)
{
    const publicPath = path.join(__dirname, "../", "public", fileName);
    const mimeType = path.extname(fileName).toLowerCase();

    fs.readFile(publicPath)
        .then(data =>
        {
            res.statusCode = 200;
            res.setHeader('Content-Type', mimeTypes[mimeType]);
            res.end(data);
        })
        .catch(err =>
        {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/text');
            res.end(err.message);
        });
}

server.listen(PORT, () =>
{
    console.log(`Server Started on Port: ${PORT}`);
});