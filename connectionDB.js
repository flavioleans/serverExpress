const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeBanco', 'root', 'fl4v10ls', {
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

// Post.sync({force: true}) Criando a tabela Post

// Users.sync({force: true}) Criando a tabela Users

//CRIANDO USUÁRIO
Users.create({
    name:"Flávio",
    lastName: "Silva",
    age: 31,
    email: "leans.flavio@gmail.com"
})

