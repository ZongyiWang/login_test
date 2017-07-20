var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} = require('graphql');

var {
	fetchTimeline,
	fetchFollower,
	fetchFriend
} = require('../../../API/twitterAPI');

const twtUserType = module.exports = new GraphQLObjectType({
	name: 'twtUser',
	description: 'Return a twitter user.',
	fields: () => ({
		/*--------------------------basic------------------------*/
		id:				{ type: GraphQLString },
		id_str: 		{ type: GraphQLString },
		name:			{ type: GraphQLString },
		screen_name:	{ type: GraphQLString },
		description: 	{ type: GraphQLString },
		created_at:		{ type: GraphQLString },
		profile_image_url:	{ type: GraphQLString },
		url:				{ type: GraphQLString },
		location: 			{ type: GraphQLString },
		tweets_count: { 
			type: GraphQLInt,
			resolve: ({ statuses_count}) => statuses_count
		},
		followers_count : { type: GraphQLInt },
		friends_count : { type: GraphQLInt },
		listed_count: 	{ type: GraphQLInt },
		favourites_count: { type: GraphQLInt },
		statuses_count	: {type: GraphQLInt },
		time_zone:	{ type: GraphQLString },
		/*--------------------------nested------------------------*/
		timeline:	{
						type: new GraphQLList(tweetType),
						args:{count:{type:GraphQLInt,defaultValue:3}},
						description: 'Get the timeline of current User',
						resolve:(user,args) =>fetchTimeline(user,args)
					},
		friends:	{
						type: new GraphQLList(twtUserType),
						args:{count:{type:GraphQLInt,defaultValue:3}},
						description: 'Get a list of followees of current User',
						resolve:(user,args) => fetchFriend(user,args)
					},
		followers:	{	
						type: new GraphQLList(twtUserType),
						args:{count:{type:GraphQLInt,defaultValue:3}},
						description: 'Get a list of followers of current User',
						resolve:(user,args) => fetchFollower(user,args)
					}
	})
});

const tweetType = require('./twtTweetType');