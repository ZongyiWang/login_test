import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
	currentView: 'home',
	facebook: true,
    twitter: true,
    instagram: true,
    wikimedia: true,
    stackoverflow: true,
    flickr: true,
    spotify: true,
    reddit:true,
    youtube: true,
    pinterest: true,
    weibo:true,
    tumblr:true,
}

const mutations = {
  switchView (state, view) {
    state.currentView = view
  },
  switchSoicalState(state, val){
  	switch(val){
  		case 'facebook':
  			state.facebook = !state.facebook;
  			break;
  		case 'twitter':
  			state.twitter = !state.twitter;
  			break;
 		case 'instagram':
  			state.instagram = !state.instagram;
  			break;
  		case 'wikimedia':
  			state.wikimedia = !state.wikimedia;
  			break;
  		case 'stackoverflow':
  			state.stackoverflow = !state.stackoverflow;
  			break;
  		case 'flickr':
  			state.flickr = !state.flickr;
  			break;
  		case 'spotify':
  			state.spotify = !state.spotify;
  			break;
  		case 'reddit':
  			state.reddit = !state.reddit;
  			break;
  		case 'youtube':
  			state.youtube = !state.youtube;
  			break;
  		case 'pinterest':
  			state.pinterest = !state.pinterest;
  			break;
  		case 'weibo':
  			state.weibo = !state.weibo;
  			break;
  		case 'tumblr':
  			state.tumblr = !state.tumblr;
  			break;
  	}
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins: [
  	createPersistedState({  
		storage: window.sessionStorage  	
	})
  ],
})
