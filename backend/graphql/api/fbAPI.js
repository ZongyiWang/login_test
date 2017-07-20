var Promise = require('promise');
var config = require('../config');
var FB = require('fb');
FB.options({version:'v2.8'});
FB.setAccessToken(config.fb.access_token); //token need to renew every 60 days!

function search(args,type){
	return new Promise((resolve,reject) => {
		FB.api('search?q=' + args['q'] + '&type=' + type,(fb)=>{
			if(!fb || fb.error) {
				reject(fb.error);
			}else{
				//console.log(fb.data);
				resolve(fb.data);
			}
		});
	});
}

function getField(id,field){
	// bad idea to query fields... rethink later!!!!!!!!!!!
	return new Promise((resolve,reject) =>{		
		FB.api(id['id'],{fields:field},(fb) =>{
				if(!fb || fb.error) {
					reject(fb.error);
				}else{
					//console.log(field,fb);
					resolve(fb[field]);
				}
			});
		});
}

function getEdge(id,edge){
	//rethink later!!!!!!!!!!!
	return new Promise((resolve,reject) =>{		
		FB.api(id['id'] + "/" + edge ,(fb) =>{
				if(!fb || fb.error) {
					reject(fb.error);
				}else{
					//console.log(edge,fb);
					resolve(fb.data);
				}
			});
		});
}

module.exports = {
					search,
					getField,
					getEdge
				};