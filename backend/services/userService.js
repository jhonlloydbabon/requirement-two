const pg = require('../database/config');
const path = require('path');

const message = (status, response)=>{
    return {status, response};
};

const addUser = async(req,res) =>{
    try {
        const {name, isLicense} = req.body;
        console.log(name+" "+isLicense);
        
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${path.basename(req.file.path)}`;

        console.log(fileUrl);
        

       const result = await pg.query(
            "INSERT INTO users (user_name, user_profile, isLicense) VALUES($1, $2, $3) RETURNING *",
            [name, fileUrl, isLicense]
        );
        res.status(200).json(message(200,result.rows[0]));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

const fetchUser = async(req,res) =>{
    try {
        const result = await pg.query("SELECT * FROM users");
        return res.status(200).json(message(200, result.rows));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

module.exports = {addUser, fetchUser};