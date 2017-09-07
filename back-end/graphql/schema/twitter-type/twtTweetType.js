var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} = require('graphql');

var fetchRetweet = require('../../../API/twitterAPI').fetchRetweet;

const tweetType = module.exports = new GraphQLObjectType({
	name: 'tweet',
	description: 'Return a tweet.',
	fields : ()=> ({
		/*--------------------------basic------------------------*/
		id: 			{ type: GraphQLString },
		id_str: 		{ type: GraphQLString },
		created_at: 	{ type: GraphQLString },
		text: 			{ type: GraphQLString },
		retweet_count: 	{ type: GraphQLInt },
		in_reply_to_user_id_str:	{ type: GraphQLString },
		in_reply_to_status_id_str: 	{ type: GraphQLString },
		in_reply_to_screen_name:	{ type: GraphQLString },
		/*--------------------------nested------------------------*/
		user: 			{ type: twtUserType },
		entities:		{ type: twtEntityType },
		retweet: 		{
							type: new GraphQLList(retweetType),
							description: 'Get a list of retweets',
							args: {count:{type:GraphQLInt,defaultValue:3}},
							resolve: (tweet,args) => fetchRetweet(tweet,args)
						}
	})
});

const twtUserType = require('./twtUserType');
const twtEntityType = require('./twtEntityType');
const retweetType = require('./twtRetweetType');