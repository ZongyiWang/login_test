var Twitter = require('twitter');
var Promise = require('promise');
var config = require('../config');

var client = new Twitter({
			consumer_key:config.twitter.consumer_key,
			consumer_secret:config.twitter.consumer_secret,
			access_token_key:config.twitter.access_token_key,
			access_token_secret:config.twitter.access_token_secret
		})

function searchUser(args){
	return new Promise((resolve,reject) =>{
		client.get('users/search',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				resolve(tweets);
			}
		});
	})
}

function searchTweet(args){
	return new Promise((resolve,reject) =>{
		client.get('search/tweets',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
			//console.log(tweets);
				resolve(tweets.statuses);
			}
		});
	})
}

function searchGeo(args){
	return new Promise((resolve,reject) =>{
		client.get('geo/search',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				resolve(tweets.result.places);
			}
		});
	})
}

function fetchTimeline(user,args){
	args['user_id'] = user.id_str;
	//console.log(args);
	return new Promise((resolve,reject) =>{
		client.get('statuses/user_timeline',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				//console.log(tweets);
				resolve(tweets);
			}
		});
	})
}

function fetchRetweet(tweet,args){
	return new Promise((resolve,reject) =>{
		client.get('statuses/retweets/' + tweet.id_str, args, function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				//console.log(tweets);
				resolve(tweets);
			}
		});
	})
}

function fetchFriend(user,args){
	args['user_id'] = user.id_str;
	return new Promise((resolve,reject) =>{
		client.get('friends/list',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				//console.log(tweets);
				resolve(tweets.users);
			}
		});
	})
}

function fetchFollower(user,args){
	args['user_id'] = user.id_str;
	return new Promise((resolve,reject) =>{
		client.get('followers/list',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				//console.log(tweets);
				resolve(tweets.users);
			}
		});
	})
}

function fetchFollower(user,args){
	args['user_id'] = user.id_str;
	return new Promise((resolve,reject) =>{
		client.get('followers/list',args,function(error,tweets,response){
			if (error){
				console.log(error);
				reject(error);
			}else{
				//console.log(tweets);
				resolve(tweets.users);
			}
		});
	})
}

module.exports = {
					searchUser, 
					searchTweet,
					fetchTimeline,
					fetchFriend,
					fetchFollower,
					fetchRetweet,
					searchGeo
				};