import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token) 
        return res.status(401).json({ message: 'Access denied: no token'});

        jwt.verify(token, TOKEN_SECRET, (err, admin) => {
            if (err) return res.status(403).json({ message: "Token invalido"});
            req.admin = admin;
        });
    next();
}