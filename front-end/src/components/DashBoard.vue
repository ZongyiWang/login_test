<!-- src/components/Home.vue -->
<template>
  <div class="container-fluid">
    <div class = "row">
      <div class="panel panel-default">
        <div class="panel-heading">Instruction</div>
        <div class="panel-body">1. To use our platform, users need to log in social platforms with their own accounts and give us permission to access their account information.</div>
        <div class="panel-body">2. Click on social platforms, which you want use, in the Unauthorized panel and log in with your own account.</div>
        <div class="panel-body">3. Once you successfully logged in, the corresponding social media logo will disappear from the Unauthorized panel and appear in the Authorized panel.</div>

      </div>
    </div>
    <div class = "row">
      <div class="col-sm-4 pull-left">
        <div >
          <h2> Unauthorized Panel</h2>
        </div>
        <div class="row">
          <div id = "show-modal" @click = "fbClick()" v-if = "facebook" class="col-sm-4">
            <icon name="facebook-square" scale = '5' color = "#3B5998"></icon>
            <h4>FACEBOOK</h4>
          </div>
          <div @click = "twClick()" v-if = "twitter" class="col-sm-4">
            <icon name="twitter-square" scale = '5' color = "#4099FF"></icon>
            <h4>TWITTER</h4>
          </div>
          <div @click = "insClick()" v-if = "instagram" class="col-sm-4">
            <icon name="instagram" scale = '5'></icon>
            <h4>INSTAGRAM</h4>
          </div>
          <div @click = "wikiClick()" v-if = "wikimedia" class="col-sm-4">
            <icon name="wikipedia-w" scale = '5'></icon>
            <h4>Wikipedia</h4>
          </div>
          <div @click = "stackClick()" v-if = "stackoverflow" class="col-sm-4">
            <icon name="stack-overflow" scale = '5'></icon>
            <h4>StackOverflow</h4>
          </div>
          <div @click = "flcClick()" v-if = "flickr" class="col-sm-4">
            <icon name="flickr" scale = '5' color = "#ff0084"></icon>
            <h4>Flickr</h4>
          </div>
          <div @click = "sptClick()" v-if = "spotify" class="col-sm-4">
            <icon name="spotify" scale = '5' color = "#00e461"></icon>
            <h4>Spotify</h4>
          </div>
          <div @click = "redClick()" v-if = "reddit" class="col-sm-4">
            <icon name="reddit-square" scale = '5' color = "#ff4500"></icon>
            <h4>Reddit</h4>
          </div>
          <div @click = "youClick()" v-if = "youtube" class="col-sm-4">
            <icon name="youtube-square" scale = '5' color = "#bb0000"></icon>
            <h4>Youtube</h4>
          </div>
          <div @click = "pinClick()" v-if = "pinterest" class="col-sm-4">
            <icon name="pinterest-square" scale = '5' color = "#cb2027"></icon>
            <h4>Pinterest</h4>
          </div>
          <div @click = "weiboClick()" v-if = "weibo" class="col-sm-4">
            <icon name="weibo" scale = '5' color = "#FF0000"></icon>
            <h4>Weibo</h4>
          </div>
          <div @click = "tumblrClick()" v-if = "tumblr" class="col-sm-4">
            <icon name="tumblr-square" scale = '5' color = "#32506d"></icon>
            <h4>Tumblr</h4>
          </div>
        </div>
      </div>
      
      <div class="col-sm-4 col-sm-offset-2">
        <div>
          <h2> Authorized Panel </h2>
        </div>
        <div class="row">
          <div id = "show-logoutmodal" @click = "afbClick()" v-if = "!facebook" class="col-sm-4">
            <icon name="facebook-square" scale = '5' color = "#3B5998"></icon>
            <h4>FACEBOOK</h4>
          </div>
          <div @click = "twClick()" v-if = "!twitter" class="col-sm-4">
            <icon name="twitter-square" scale = '5' color = "#4099FF"></icon>
            <h4>TWITTER</h4>
          </div>
          <div @click = "insClick()" v-if = "!instagram" class="col-sm-4">
            <icon name="instagram" scale = '5'></icon>
            <h4>INSTAGRAM</h4>
          </div>
          <div @click = "wikiClick()" v-if = "!wikimedia" class="col-sm-4">
            <icon name="wikipedia-w" scale = '5'></icon>
            <h4>Wikipedia</h4>
          </div>
          <div @click = "stackClick()" v-if = "!stackoverflow" class="col-sm-4">
            <icon name="stack-overflow" scale = '5'></icon>
            <h4>StackOverflow</h4>
          </div>
          <div @click = "flcClick()" v-if = "!flickr" class="col-sm-4">
            <icon name="flickr" scale = '5' color = "#ff0084"></icon>
            <h4>Flickr</h4>
          </div>
          <div @click = "sptClick()" v-if = "!spotify" class="col-sm-4">
            <icon name="spotify" scale = '5' color = "#00e461"></icon>
            <h4>Spotify</h4>
          </div>
          <div @click = "redClick()" v-if = "!reddit" class="col-sm-4">
            <icon name="reddit-square" scale = '5' color = "#ff4500"></icon>
            <h4>Reddit</h4>
          </div>
          <div @click = "youClick()" v-if = "!youtube" class="col-sm-4">
            <icon name="youtube-square" scale = '5' color = "#bb0000"></icon>
            <h4>Youtube</h4>
          </div>
          <div @click = "pinClick()" v-if = "!pinterest" class="col-sm-4">
            <icon name="pinterest-square" scale = '5' color = "#cb2027"></icon>
            <h4>Pinterest</h4>
          </div>
          <div @click = "weiboClick()" v-if = "!weibo" class="col-sm-4">
            <icon name="weibo" scale = '5' color = "#FF0000"></icon>
            <h4>Weibo</h4>
          </div>
          <div @click = "tumblrClick()" v-if = "!tumblr" class="col-sm-4">
            <icon name="tumblr-square" scale = '5' color = "#32506d"></icon>
            <h4>Tumblr</h4>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="showModal" @close="showModal = false" class = "col-sm-12">
            <!--
              you can use custom content here to overwrite
              default content
            -->
    </modal>
    <logoutmodal v-if="showLogoutModal" @close="showLogoutModal = false" class = "col-sm-12">
            <!--
              you can use custom content here to overwrite
              default content
            -->
    </logoutmodal>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Modal from './Modal';
  import logoutModal from './logoutModal';

  export default {
    name: 'dashboard',
    data () {
      return{
        showModal: false,
        showLogoutModal: false,
      }
    },
    computed: mapState({
      facebook: state=>state.facebook,
      twitter: state=>state.twitter,
      instagram: state=>state.instagram,
      wikimedia: state=>state.wikimedia,
      stackoverflow: state=>state.stackoverflow,
      flickr: state=>state.flickr,
      spotify: state=>state.spotify,
      reddit: state=>state.reddit,
      youtube: state=>state.youtube,
      pinterest: state=>state.pinterest,
      weibo: state=>state.weibo,
      tumblr: state=>state.tumblr,

    }),
    methods: {
      fbClick() {
        console.log(this.showModal);
        this.showModal = true;
        console.log(this.showModal);
        this.$store.commit('switchSoicalState', 'facebook');
      },
      afbClick() {
        this.showLogoutModal = true
        this.$store.commit('switchSoicalState', 'facebook');
      },
      twClick() {
        this.$store.commit('switchSoicalState', 'twitter');
      },
      insClick() {
        this.$store.commit('switchSoicalState', 'instagram');
      },
      wikiClick() {
        this.$store.commit('switchSoicalState', 'wikimedia');
      },
      stackClick() {
        this.$store.commit('switchSoicalState', 'stackoverflow');
      },
      flcClick() {
        this.$store.commit('switchSoicalState', 'flickr');
      },
      sptClick() {
        this.$store.commit('switchSoicalState', 'spotify');
      },
      redClick() {
        this.$store.commit('switchSoicalState', 'reddit');
      },
      youClick() {
        this.$store.commit('switchSoicalState', 'youtube');
      },
      pinClick() {
        this.$store.commit('switchSoicalState', 'pinterest');
      },
      weiboClick() {
        this.$store.commit('switchSoicalState', 'weibo');
      },
      tumblrClick() {
        this.$store.commit('switchSoicalState', 'tumblr');
      },
    },
    components: {
      'modal' : Modal,
      'logoutmodal' : logoutModal,
    }
  }
</script>

<style scoped scoped>
  button {
    background-color: white;
    border: none;
  }
  .container-fluid {
    font-size: 18px;
  }
</style>