if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}
const express = require('express');
const cors = require("cors")
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port 4000');
});