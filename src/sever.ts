import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import routes from './routes/index';

dotenv.config();

const server = express();


server.set('view engine', 'mustache');

server.set('view', path.join(__dirname, 'view'));

server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));


// Rotas
server.use(routes);

server.use((req, res) => {
    res.send('Página não encontrada!')
});

server.listen(process.env.PORT);