import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: '*'
}));

app.use(express.json());

export default app;