const http = require('http')

const port = 5500;

const server = http.createServer((req,res) => {
    if (req.url === '/home') {
        res.writeHead(200, {"Content-Type": "text/html" });
        res.end('<h1>Home page</h1>');
    }
    if (req.url === '/users') {
        const users = [
            {
                name: 'Jhon Doe',
                email: 'Jhon@gmail.com'
            },
            {
                name: 'Riquelme',
                email: 'Riquelme@gmail.com'
            },
        ];
        res.writeHead(200, {"Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    };
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));