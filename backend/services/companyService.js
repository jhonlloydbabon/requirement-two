const pg = require('../database/config');

const message = (status, response)=>{
    return {status, response};
};

const addCompany = async(req,res) =>{
    try {
        const {name, description} = req.body;
        const result = await pg.query("INSERT INTO company(company_name, company_description) VALUES($1,$2) RETURNING *",[name,description]);
        return res.status(200).json(message(200, result.rows[0]));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

const fetchCompany = async(req,res) =>{
    try {
        const result = await pg.query("SELECT * FROM company");
        return res.status(200).json(message(200, result.rows));
    } catch (error) {
        return res.status(500).json(message(500,error));
    }
}

module.exports = {addCompany, fetchCompany};