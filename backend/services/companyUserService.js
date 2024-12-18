const pg = require('../database/config');

const message = (status, response)=>{
    return {status, response};
};

const addUserCompany = async(req,res) =>{
    try {
        const {company_id, user_id} = req.body;
        const result = await pg.query("INSERT INTO company_user(fk_company, fk_user) VALUES($1,$2) RETURNING *",[company_id, user_id]);

        const value = await pg.query("SELECT c.company_name, c.company_description, u.user_name, u.user_profile from company_user cs INNER JOIN company c ON c.company_id=cs.fk_company INNER JOIN users u ON u.user_id=cs.fk_user WHERE id = $1",[result.rows[0].id]);
        return res.status(200).json(message(200, value.rows));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

const fetchUserCompany = async(req,res) =>{
    try {
        const result = await pg.query("SELECT c.company_name, c.company_description, u.user_name, u.user_profile from company_user cs INNER JOIN company c ON c.company_id=cs.fk_company INNER JOIN users u ON u.user_id=cs.fk_user");

        return res.status(200).json(message(200, result.rows));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

module.exports = {addUserCompany, fetchUserCompany};