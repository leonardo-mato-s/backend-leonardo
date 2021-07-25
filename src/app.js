import express from 'express'
import morgan from 'morgan'
import correoRoutes from './routes/correo.routes'
import usuarioRoutes from './routes/usuario.routes'
import authRoutes from './routes/auth.routes'


const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('Bienvenido hOLA');
});

app.use('/correo', correoRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/api/auth/', authRoutes);

export default app;