var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    cats: String
  }
`)

var rootValue = { cats: () => "Meow!" }

var source = "{ cats }"

graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
})
