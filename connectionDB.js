const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeBanco', 'root', 'admin', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Successfully Connected")
}).catch(function(error){
    console.log("Failed to Connect "+error)
})

const Post = sequelize.define('posts',{
    title:{
        type: Sequelize.STRING //limite de palavras
    },
    contents:{
        type: Sequelize.TEXT //caracteres ilimitados 
    }
})

const Users = sequelize.define('users',{
    name:{
        type: Sequelize.STRING
    },
    lastName:{
        type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//CRIANDO USUÁRIO
Users.create({
    name:"Flavio ",
    lastName: "Leandro da Silva",
    age: 31,
    email: "leans.flavio@gmail.com"
})

