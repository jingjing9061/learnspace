<template>
  <div class="daily-article">
  	<div class="daily-article-title">{{data.title}}</div>
  	<div class="daily-article-content" v-html="data.body"></div>
  	<!-- 评论 -->
  	<div class="daily-comments" v-for="item in comment">
  	    <div class="daily-comment">
	  		<div class="daily-comment-avatar">
	  			<img :src="imgPath + item.avatar">
	  		</div>
	  		<div class="daily-comment-content">
	  			<div class="daily-comment-name">{{item.author}}</div>
	  			<div class="daily-comment-time" v-time="item.time"></div>
	  			<div class="daily-comment-text">{{item.content}}</div>
	  		</div>
        </div>
  	</div>
  </div>

</template>
<script>
	import util from '../libs/util.js';
	import time from '../directives/times.js';
	export default {
		directives: {
			time
		},
		props: {
           id: {
           		type:Number,
           		dafault:0
           }

		},
		data () {
			return {
				data: [],
				comment:[],
				imgPath:util.imgPath
			}

		},
		methods: {
          article(){
          	util.ajax.get('news/'+this.id).then(res=>{
          		res.body = res.body.replace(/src="http/g, 'src="' + util.imgPath + 'http');
          		res.body = res.body.replace(/src="https/g, 'src="' + util.imgPath + 'https');
          		this.data = res;
          		})
          		this.getComments()
          },
          getComments() {
          	util.ajax.get('story/' + this.id + '/short-comments').then(res=>{
          		this.comment = res.comments;
          	})
          }

		},
		//监控val值发生变化
		watch: {
			id:function (val) {
             this.article();
			}
		}


	}
</script>