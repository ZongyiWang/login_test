var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var search = require('../api/fbAPI').search;

const fbQueryType =  module.exports = new GraphQLObjectType({
	name:'fbQuery',
	description:'Query user, page, event, group, place, placetopic.',
	fields: () => ({
		queryUser:{
			type: new GraphQLList(fbUserType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'user')
		},
		queryPage:{
			type: new GraphQLList(fbPageType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'page')
		},
		queryPlace: {
			type: new GraphQLList(fbPlaceType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'place')
		},
		queryEvent: {
			type: new GraphQLList(fbEventType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'event')
		},
		queryGroup: {
			type: new GraphQLList(fbGroupType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'group')
		},
		queryPlaceTopic:{
			type: new GraphQLList(fbPlaceTopicType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'placetopic')
		}
	})
});

const fbUserType = require('./facebook-type/fbUserType');
const fbPageType = require('./facebook-type/fbPageType');
const fbEventType = require('./facebook-type/fbEventType');
const fbPlaceType = require('./facebook-type/fbPlaceType');
const fbGroupType = require('./facebook-type/fbGroupType');
const fbPlaceTopicType = require('./facebook-type/fbPlaceTopicType');

