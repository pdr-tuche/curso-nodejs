const Sequelize = require("sequelize")
const sequelize = new Sequelize('teste','postgres', 'postgres', {
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate().then(()=>{
    console.log("conectado")
}).catch((err)=>{
    console.log("falha ao conectar", err)
})


const Postagem = sequelize.define('tb_postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }

})

Postagem.create({
    titulo:"este e um titulo",
    conteudo: "este e um conteudo qualquer =)"
})

//Postagem.sync({force: true})