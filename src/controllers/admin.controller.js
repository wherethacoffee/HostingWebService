import Admin from '../models/admin.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js"

export const register = async (req, res) => {
    const { username, pwd } = req.body;

    try {
        
        const pwdHash = await bcrypt.hash(pwd, 10);

        const newAdmin = Admin({
            username,
            pwd: pwdHash
        });

        const adminSaved = await newAdmin.save();
        const token = await createAccessToken( {id: adminSaved._id} );
        res.cookie("token", token);

        res.json({
            id: adminSaved._id,
            username: adminSaved.username,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { username, pwd } = req.body;

    try {
        
        const adminFound = await Admin.findOne({username})
        if (!adminFound) return res.status(400).json({message: "user not found"});

        const isMatch  = await bcrypt.compare(pwd, adminFound.pwd);
        if (!isMatch) return res.status(400).json({message: "Incorrect password"});

        const token = await createAccessToken( {id: adminFound._id} );
        res.cookie("token", token);

        res.json({
            id: adminFound._id,
            username: adminFound.username,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const adminFound = await Admin.findById(req.admin.id);

    if (!adminFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: adminFound._id,
        username: adminFound.username,
    })

};

export const getAdmin = async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json(admin);
};

export const getAdmins = async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
};

export const update = async (req, res) => {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json(admin)
};

export const remove = async (req, res) => {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json(admin)
}