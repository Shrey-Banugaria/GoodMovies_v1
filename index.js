const server = require("express")
const bodyParser = require("body-parser")
const dbConnection = require('./Database/mongoose')
const axios = require("axios")
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require("@apollo/server/express4")
const cors = require("cors")
const PORT = process.env.PORT || 3000

dbConnection.mongooseDb()
const app = server()

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    await apolloServer.start();
    app.use('/graphql', cors(), expressMiddleware(apolloServer))

    app.listen(PORT, () => {
        console.log(`Magic happening on ${PORT}`)
    })
}

startServer()