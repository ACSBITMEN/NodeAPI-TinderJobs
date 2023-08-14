import express from 'express';
import knex from 'knex';
import personasRoutes from './routes/personasRoutes.js';
import trabajosRoutes from './routes/trabajosRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

const connection = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'tinderDB'
    }
};

const db = knex(connection);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'Get Home route Working fine!'
    });
});

app.use('/api', personasRoutes);
app.use('/api', trabajosRoutes);

app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});
