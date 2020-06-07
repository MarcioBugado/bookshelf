const knex = require("../database")

module.exports = {
    async index(req, res){
        const results = await knex('aluno')
        
        return res.json(results)
    }, 
    async create(req, res, next){

        try{
            const {nome, sexo, idade, valor_pago_curso, cpf, endereco, ativo_sn} = req.body;
            await knex('aluno').insert({
                nome, 
                sexo, 
                idade, 
                valor_pago_curso, 
                cpf, 
                endereco, 
                ativo_sn
            })
            return res.status(201).json({nome})
        }catch(error){
            next(error)
        }      
       
    }
}