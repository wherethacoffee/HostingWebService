import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

//Import de las rutas
import adminRoutes from './routes/admins.routes.js'

const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: '*'
}));

app.use(express.json());

//Rutas
app.get('/', (req, res) => {
    res.send('Welcome to the hosting web service')
});
app.use('/admin', adminRoutes);


export default app;