const knex = require("../database")

module.exports = {
    async index(req, res){
        const results = await knex('aluno')
        
        return res.json(results)
    }
}