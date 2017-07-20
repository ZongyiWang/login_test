var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const fbProfilePictureType = module.exports = new GraphQLObjectType({
	name: 'fbProfilePic',
	description: 'Profile Picture.',
	fields: () => ({
		height:	{type:GraphQLInt},
		url:	{type:GraphQLString},
		width:	{type:GraphQLInt}
	})
});