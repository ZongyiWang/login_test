var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
	}= require('graphql');
	
const twitterQueryType = require('./twitterSchema');
const fbQueryType = require('./fbSchema');
const stackExchangeQueryType = require('./stackExchangeSchema');
const mediaWikiQueryType = require('./mediaWikiSchema');
const flickrQueryType = require('./flickrSchema');
const spotifyQueryType = require('./spotifySchema');
const youtubeQueryType = require('./youtubeSchema');
const redditQueryType = require('./redditSchema');
const weiboQueryType = require('./weiboSchema');
const tumblrQueryType = require('./tumblrSchema');

function wrapper(){
	return {}
}

const Query = new GraphQLObjectType({
  name   : 'Query',
  description : 'all api query type',
  fields : () =>({
		twitter:{
			type:twitterQueryType,
			resolve: () => wrapper()
			},
		facebook:{
			type:fbQueryType,
			resolve: () => wrapper()
			},
		flickr:{
			type: flickrQueryType,
			resolve:() => wrapper()
			},
		spotify:{
			type: spotifyQueryType,
			resolve:() => wrapper()
		},
		youtube:{
			type: youtubeQueryType,
			resolve:() => wrapper()
		},
		reddit:{
			type: redditQueryType,
			resolve:() => wrapper()
		},
		weibo:{
			type: weiboQueryType,
			resolve:() => wrapper()
		},
		tumblr:{
			type:tumblrQueryType,
			resolve:() => wrapper()
		},
		stackExchange: {
				type: stackExchangeQueryType,
				resolve:() => wrapper()
		},
		mediaWiki: {
				type: mediaWikiQueryType,
				resolve:() => wrapper()
		}
  })
});
	

module.exports = new GraphQLSchema({
	query:Query
});

