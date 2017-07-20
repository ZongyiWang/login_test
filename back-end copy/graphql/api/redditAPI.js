var config = require('../config');
var Promise = require('promise');
const snoowrap = require('snoowrap');

const r = new snoowrap({
	userAgent: 	config.reddit.userAgent,
	clientId:  	config.reddit.client_id,
	clientSecret:	config.reddit.client_secret,
	username:		config.reddit.username,
	password:		config.reddit.password
});

function redditAPI(resolveName, id, args){
	return new Promise((resolve,reject) =>{
		switch(resolveName){
			case 'searchSubreddits':
				r.searchSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) =>{
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'searchSubredditNames':
				r.searchSubredditNames(args).then((data) =>{
					resolve(data);
				})
				.catch((err) =>{
					reject(err)
				});
				break;
				
			case 'searchSubredditTopics':
				r.searchSubredditTopics(args).then((data) =>{
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					});
				break;
				
			case 'getPopularSubreddits':
				r.getPopularSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
			
			case 'getNewSubreddits':
				r.getNewSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getGoldSubreddits':
				r.getGoldSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getDefaultSubreddits':
				r.getDefaultSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
			
			case 'search':
				r.search(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getHot':
				r.getHot(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
			
			case 'getNew':
				r.getNew(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
			
			case 'getTop':
				r.getTop(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getControversial':
				r.getControversial(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getRising':
				r.getRising(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'getNewComments':
				r.getNewComments(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'trophy':
				r.getUser(id).getTrophies().then((data) => {
					resolve(data.trophies);
				})
				.catch((err) =>{
					reject(err)
				});
				break;
			
			case 'overview':
				r.getUser(id).getOverview().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
			
			case 'submission':
				r.getUser(id).getSubmissions().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'comment':
				r.getUser(id).getComments().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'upvote':
				r.getUser(id).getUpvotedContent().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			case 'downvote':
				r.getUser(id).getDownvotedContent().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						resolve(data);
					})
					.catch((err) =>{
						reject(err)
					})
				});
				break;
				
			/*case 'expansion':
				r.getSubmission(id).expandReplies({options:{args}}).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'getUserFlairTemplates':
				r.getSubreddit(id).getUserFlairTemplates().then((data) => {
						//console.log(data);
						resolve(data);
				});
				break;
				
			case 'subreddit_hot':
				r.getSubreddit(id).getHot().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'subreddit_new':
				r.getSubreddit(id).getNew().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;*/
				
				
			default:
				console.log('sorry we can\'t find matching resolve type:' + resolveName);
				resolve(null);
		}
	});
}

module.exports = redditAPI;