var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');
var redditAPI = require('./../api/redditAPI');

const redditQueryType = module.exports = new GraphQLObjectType({
	name:'redditQuery',
	description:'',
	fields: () => ({
		searchSubreddits:{
			type:new GraphQLList(subreddditType),
			args:{
				query:{type:GraphQLString},
				extra:{type:GraphQLInt,
						defaultValue:0,
						description:'for fetchMore'},
			},
			description:'Searches subreddits by title and description.Returns A Listing containing Subreddits',
			resolve: (_,args) => redditAPI(resolveName = 'searchSubreddits', id='',args=args)
		},
		
		searchSubredditNames:{
			type:new GraphQLList(GraphQLString),
			args:{
				query:{type:GraphQLString},
				exact:{type:GraphQLBoolean},
				includeNsfw:{type:GraphQLBoolean},
			},
			description:'Searches for subreddits given a query. Returns An Array containing subreddit names',
			resolve: (_,args) => redditAPI(resolveName='searchSubredditNames', id='', args=args)
		},
		
		searchSubredditTopics:{
			type:new GraphQLList(subreddditType),
			args:{
				query:{type:GraphQLString},
			},
			description:'Searches subreddits by topic.Returns An Array of subreddit objects corresponding to the search results',
			resolve: (_,args) => redditAPI(resolveName='searchSubredditTopics',id='',args=args)
		},
		
		search:{
			type:new GraphQLList(redditLinkType),
			description:'Conducts a search of reddit submissions.Returns:A Listing containing the search results.',
			args:{	query:		{type:GraphQLString},
					time:		{type:GraphQLString,
									description:'hour, day, week, month, year, all'},
					subreddit:	{type:GraphQLString},
					restrictSr:	{type:GraphQLBoolean,
									description:'Restricts search results to the given subreddit'},
					sort:		{type:GraphQLString,
									description:'relevance, hot, top, new, comments'},
					syntax:		{type:GraphQLString,
									description:'cloudsearch, lucene, plain'},	
					extra:		{type:GraphQLInt,
									defaultValue:0,
									description:'for fetchMore'
								},
					},
			resolve: (_,args) => redditAPI(resolveName = 'search', id='', args = args)
		},
		
		getPopularSubreddits:{
			type:new GraphQLList(subreddditType),
			description:'Gets a list of subreddits, arranged by popularity.Returns A Listing containing Subreddits',
			args:{
				options:	{type:GraphQLInt,defaultValue:0},
				extra:		{type:GraphQLInt,
									defaultValue:0,
									description:'for fetchMore'
								},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getPopularSubreddits',id='',args=args)
		},
		
		getNewSubreddits:{
			type:new GraphQLList(subreddditType),
			description:'Gets a list of subreddits, arranged by age. Returns A Listing containing Subreddits',
			args:{
				options:	{type:GraphQLInt,defaultValue:0},
				extra:		{type:GraphQLInt,
									defaultValue:0,
									description:'for fetchMore'
								},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getNewSubreddits',id='',args=args)
		},
		
		getGoldSubreddits:{
			type:new GraphQLList(subreddditType),
			description:'Gets a list of gold-exclusive subreddits. Returns A Listing containing Subreddits',
			args:{
				options:	{type:GraphQLInt,defaultValue:0},
				extra:		{type:GraphQLInt,
									defaultValue:0,
									description:'for fetchMore'
								},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getGoldSubreddits',id='',args=args)
		},
		
		getDefaultSubreddits:{
			type:new GraphQLList(subreddditType),
			description:'Gets a list of default subreddits. Returns A Listing containing Subreddits',
			args:{
				options:	{type:GraphQLInt,defaultValue:0},
				extra:		{type:GraphQLInt,
									defaultValue:0,
									description:'for fetchMore'
								},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getDefaultSubreddits',id='',args=args)
		},
		
		getHot:{
			type:new GraphQLList(redditLinkType),
			description:'Gets a Listing of hot posts. Return A Listing containing the retrieved submissions.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getHot', id='', args = args)
		},
		getNew:{
			type:new GraphQLList(redditLinkType),
			description:'Gets a Listing of new posts. Return A Listing containing the retrieved submissions.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getNew', id='', args = args)
		},
		getNewComments:{
			type:new GraphQLList(redditCommentType),
			description:'Gets a Listing of new comments.Return A Listing containing the retrieved comments.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getNewComments', id='', args = args)
		},
		getTop:{
			type:new GraphQLList(redditLinkType),
			description:'Gets a Listing of top posts. Return A Listing containing the retrieved submissions.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getTop', id='', args = args)
		},
		getControversial:{
			type:new GraphQLList(redditLinkType),
			description:'Gets a Listing of controversial posts. Return A Listing containing the retrieved submissions.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getControversial', id='', args = args)
		},
		getRising:{
			type:new GraphQLList(redditLinkType),
			description:'Gets a Listing of rising posts. Return A Listing containing the retrieved submissions.',
			args:{
					subredditName:	{type:GraphQLString},
					options:		{type:GraphQLInt, defaultValue:0},
					extra:			{type:GraphQLInt,
										defaultValue:0,
										description:'for fetchMore'
									},
			},
			resolve: (_,args) => redditAPI(resolveName = 'getRising', id='', args = args)
		},
		
	})
});

const subreddditType = require('./reddit-type/subredditType');
const redditLinkType = require('./reddit-type/redditLinkType');
const redditCommentType = require('./reddit-type/redditCommentType');
