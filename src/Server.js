const http = require('http')
const path = require('path')
const fs = require('fs').promises;

const PORT  = 3000;

const server = http.createServer((req, res) =>
{
    if(req.method === 'GET' && req.url === '/')
    {
        const publicPath = path.join(__dirname, "../", "public", 'index.html');
        fs.readFile(publicPath)
            .then(data =>
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            })
            .catch(err =>
            {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/text');
                res.end(err.message);
            });
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/text');
        res.end("Webpage Not Found");
    }
});

server.listen(PORT, () =>
{
    console.log(`Server Started on Port: ${PORT}`);
});