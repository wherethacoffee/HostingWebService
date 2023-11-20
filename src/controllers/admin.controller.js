import Admin from '../models/admin.model.js'

export const register = async (req, res) => {
    const { username, pwd } = req.body;

    try {
        const newAdmin = Admin({
            username,
            pwd
        });

        const adminSaved = await newAdmin.save();
        res.json(adminSaved);
    } catch (error) {
        res.status(404).json({
            ok: false,
            status: 404,
            message: error.message
        })
    }
}

export const login = (req, res) => res.send('login')