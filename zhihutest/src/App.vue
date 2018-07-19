<template>
  <div id="daily">
      <div class="daily-menu">
        <div class="daily-menu-item" @click="handerCommend" :class="{on: type==='recommend'}">每日推荐</div>
        <div class="daily-menu-item" @click="showThems = !showThems" :class="{on:type === 'daily'}">主题日报</div>
        <!-- 主题日报列表 -->
        <ul v-show="showThems">
          <li v-for="item in themes">
            <a @click="handerThemes(item.id)">{{item.name}}</a>
          </li>
        </ul>
      </div>
       
      <div class="daily-list" ref="list" v-for="item in recommendList">

         <div v-if="type === 'recommend'">
            <div class="daily-date">{{item.date}}</div>
            <item v-for="item1 in item.stories" :data="item1" :key="item1.id" @click.native="dailyArticle(item1.id)"></item>
         </div>

         <!-- 主题日报 -->
         <div v-if="type === 'daily'">
             <item v-for="item in list" :data="item" :key="item.id" @click.native="dailyArticle(item.id)"></item>
         </div>
      </div>

    <daily-article :id="dailyid"></daily-article>
  </div>
</template>

<script>

import util from './libs/util.js'
import item from './components/item.vue'
import dailyArticle from './components/article.vue'

export default {

  data() {
    return {
      showThems:false,
      themes:[],
      recommendList:[],
      list:[],
      type:'recommend',
      daytime: util.getTodayTime(),
      dailyid:0
    }
  },
  methods: {
    dailyArticle(id) {
     this.dailyid = id;
     // console.log(id)
    },
    handerCommend() {
      this.type= "recommend";
      this.recommendList =[];
      this.list = [];
      this.getRecommends();
    },
    getRecommends() {
      const time = util.prevDay(this.daytime + 86400000);
      util.ajax.get('news/before/'+ time).then(res=>{
        this.recommendList.push(res)
      })
    },
    getThemes() {
      util.ajax.get('themes').then(res=>{
        this.themes = res.others;

      });
    },
    handerThemes(id) {
       this.type = 'daily';
        util.ajax.get('theme/' + id).then(res => {
          this.list = res.stories.filter(item => item.type !== 1 )
        });
    }
  },
  mounted() {
    this.getRecommends();
    this.getThemes();
    const list = this.$refs.list;

    list.addEventListener('scroll',()=>{
      if (type === 'daily') {return};
      if(list.scrollTop + document.body.clientHeight >= list.scrollHeight) {
        this.daytime -= 86400000;
        this.getRecommends();
      }
    })

  },
  components: {
    item,
    dailyArticle

  }
}
</script>


