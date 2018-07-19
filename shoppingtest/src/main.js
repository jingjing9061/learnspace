import Vue from 'vue'
import App from './App'
import router from './router'
import style from './style.css'

import vuex from 'vuex'
import product_data from './product';

Vue.config.productionTip = false

//title
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

Vue.use(vuex);

function rep(arg) {    
   let temp = [];
   for (var i = 0; i < arg.length; i++) {
   	   if (temp.indexOf(arg[i]) == -1) {
   	   	 temp.push(arg[i]);
   	   }
   }

   return temp;
}

var store = new vuex.Store({
	state: {
		cartList:[],
		product_data:[]
		
	},
	getters: {
		brands:state => {
			const brands = state.product_data.map(item => item.brand);
			return rep(brands);
		},
		colors: state => {
			const colors = state.product_data.map(item => item.color);
			return rep(colors);
		}
		

	},
	mutations:{
		setProductList(state,data) {
         state.product_data = data;
		},
		addcart(state,id){
			console.log(id)

			const isExistid = state.cartList.find(item => item.id ===id);
			if (isExistid) {
					isExistid.count ++;
			}else {
				state.cartList.push({
					id: id,
					count:1
			     });
			}



		}
	},
	actions:{
		//mock
		getProductList(context){
			setTimeout(() => {
				context.commit('setProductList', product_data);
			}, 500)
		}
	}

});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
