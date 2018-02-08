const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')

const wordType = new GraphQLObjectType({
  name: 'WordType',
  description: 'A word object in a dictionary.',
  fields: {
    spelling: {
      type: GraphQLString,
    },
    ipa: {
      type: GraphQLString,
    },
    meaning: {
      type: GraphQLString,
    },
  }
});

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    message: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    word: {
      type: wordType,
    },
  },
});

const schema = new GraphQLSchema({
  query: queryType,
});

module.exports = schema
