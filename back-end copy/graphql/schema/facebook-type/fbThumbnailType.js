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

const fbThumbnailType = module.exports = new GraphQLObjectType({
	name: 'fbThumbnail',
	description: 'Represents an video\'s thumbnail on Facebook.',
	fields: () => ({
		/*-----------------------------------field---------------------------------*/
		id:		{type:GraphQLString},
		height:	{type:GraphQLInt},
		scale:	{type:GraphQLFloat},
		uri:	{type:GraphQLString},
		width:	{type:GraphQLInt}
	})
});