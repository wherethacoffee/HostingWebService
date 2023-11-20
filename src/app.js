import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

//Import de las rutas
import adminRoutes from './routes/admins.routes.js'
import sugerenciasRoutes from "./routes/sugerencias.routes.js";

const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(cookieParser());

//Rutas
app.get('/', (req, res) => {
    res.send('Welcome to the hosting web service')
});
app.use('/admin', adminRoutes);
app.use('/sugerencias', sugerenciasRoutes);


export default app;