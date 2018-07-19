<template>
	<div v-show="filterList.length">
		<div class="list-control">
			<div class="list-control-filter">
				<span>品牌:</span>
				<span 
				 class="list-control-filter-item"
				 :class="{on:item === filterBrand}"
				 v-for="item in brands"
				 @click="handlefilterBrand(item)"
				>{{item}}</span>
			</div>
			<div class="list-control-filter">
				<span>颜色:</span>
				<span 
					class="list-control-filter-item"
					:class="{on:item === filterColor}"
					v-for="item in colors"
					@click="handlefilterColor(item)"
					>{{item}}</span>
			</div>
			<div class="list-control-order">
				<span>排序:</span>
				<span 
					class="list-control-order-item"
					:class="{on: order === ''}"
					@click="handleOrderDefault">默认</span>
				<span 
					class="list-control-order-item"
					:class="{on: order === 'sales'}"
					@click="handleOrderSales">销量</span>
				<span 
					class="list-control-order-item"
                    :class="{on: order.indexOf('cost') > -1}"
					@click="handleOrderCost">
					价格
					<i v-if="order ==='cost-asc'">↑</i>
					<i v-if="order ==='cost-desc'">↓</i>
				</span>
			</div>
		</div>

		<product v-for="item in filterList" :key="item.id" :info="item"></product>
		<div class="product-not-found" v-show="!filterList.length">无相关产品</div>
	</div>
</template>

<script>
 	import product from '../components/product.vue'
	export default {
		data() {
			return {
				filterColor:'',
				filterBrand:'',
				order:''
			}
		},
		computed: {
			list () {
				return this.$store.state.product_data;
			},
			brands() {
				return this.$store.getters.brands;
			},
			colors(){
				return this.$store.getters.colors;
			},
			filterList() {
				let list = [...this.list];

				if (this.filterBrand !== '') {
					list = list.filter(item => item.brand == this.filterBrand);
				}
				if (this.filterColor !== '') {
					list = list.filter(item => item.color == this.filterColor);
				}

				if (this.order !== '') {
					if (this.order === 'sales') {
						list = list.sort((a,b) => a.sales > b.sales);
					}else if (this.order == 'cost-desc') {
						list = list.sort((a,b) => a.cost > b.cost);
					}else if (this.order == 'cost-asc'){
						list = list.sort((a,b) => a.cost < b.cost);
					}

				}

	            return list;
	        }
		},
		methods:{
			handlefilterBrand(brand){
				if (this.filterBrand == brand) {
					this.filterBrand = '';
				}else {
					this.filterBrand = brand;
				}

			},
			handlefilterColor(color){
				if (this.filterColor == color) {
					this.filterColor = ''
				}else {
					this.filterColor = color;
				}

			},
			handleOrderDefault(){
				if (this.order !== '') {
					this.order = '';
				}
			},
			handleOrderSales(){
				this.order = 'sales'
			},
			handleOrderCost(){
				console.log('9999');
				if (this.order == 'cost-desc') {
					this.order = 'cost-asc'
				}else{
					this.order = 'cost-desc'
				}
			}

		},
		mounted () {
		    this.$store.dispatch('getProductList');
		},
		components:{
			product
		}
	}
	
</script>

<style scoped>
	.list-control{
		background: #fff;
		margin: 16px;
		padding: 16px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
	}
	.list-control-filter {
		margin-bottom: 16px;
	}
	.list-control-order-item, .list-control-filter-item {
		cursor: pointer;
		border: 1px solid #e9eaec;
		border-radius: 6px;
		padding: 2px 6px;
		margin-right: 6px;
	}
	.list-control-order-item.on, .list-control-filter-item.on {
		background: #f2352e;
		border:1px solid #f2352e;
		color: #fff;

	}
	.product-not-found {
		text-align: center;
		padding: 32px;
	}
	

	
</style>