var Promise = require('promise');
var config = require('../config');
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
	credentials:{
		consumer_key:		config.tumblr.consumer_key,
		consumer_secret:	config.tumblr.consumer_secret,
		token:				config.tumblr.access_token,
		token_secret:		config.tumblr.access_token_secret
	},
	returnPromises:true,
});

function tumblrAPI(resolveName, id, args){
	return new Promise((resolve,reject) =>{
		switch(resolveName){
			case 'tagged':
				client.taggedPosts(args['tag'],args).then(function(resp){
					//console.log(resp)
					resolve(resp);
				})
				.catch(function(err){
					console.log(err);
					reject(err);
				});
				break;
				
			case 'blogInfo':
				client.blogInfo(id).then(function(resp){
					//console.log(resp.blog);
					resolve(resp.blog);
				})
				.catch(function(err){
					console.log(err);
					reject(err);
				});
				break;
			
			case 'blogLikes':
				client.blogLikes(id,args).then(function(resp){
					//console.log(resp.blog);
					resolve(resp.liked_posts);
				})
				.catch(function(err){
					console.log(err);
					reject(err);
				});
				break;
				
			case 'blogPosts':
				client.blogPosts(id,args).then(function(resp){
					//console.log(resp.blog);
					resolve(resp.posts);
				})
				.catch(function(err){
					console.log(err);
					reject(err);
				});
				break;
				
			default:
				console.log('sorry we can\'t find matching resolve type:' + resolveName);
				resolve(null);
		}
	});
}

module.exports = tumblrAPI;