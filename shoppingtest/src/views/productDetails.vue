<template>
	<div v-if="product">
		<div class="product">
			<div class="product-image">
				<img :src="product.image">
			</div>
			<div class="product-info">
				<h1 class="product-name">{{product.name}}</h1>
				<div class="product-cost">¥{{product.cost}}</div>
				<div class="product-add-cart">加入购物车</div>
			</div>

			<div class="prodect-desc">
				<h2></h2>
				<img v-for="n in 10" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'">
			</div>
		</div>
	</div>
</template>
<script>
	import product_data from '../product.js'
	export default{
		data() {
			return {
				id:parseInt(this.$route.params.id),
				product: null
			}
		},
		methods: {
			getProduct() {
				setTimeout(() =>{
					// this.product = product_data.find(item => item.id === this.id)
					this.product = product_data.find(item => item.id === this.id)
				},500)
			}
		},
		mounted () {
			this.getProduct();
		}
	}
	
</script>
<style scoped>
	.product {
		background: #fff;
		padding: 32px;
		margin: 32px;
		border: 1px solid #dddee1;
		border-radius: 10px;
		overflow: hidden;
	}
	.product-image {
		float: left;
		width: 50%;
		height: 550px;
		text-align: center;
	}
	.product-info {
		float: left;
		width: 50%;
		height: 150px;
		padding: 150px 0 250px;
		text-align: center;
	}
	.product-cost {
		color: #f2352e;
		margin: 8px 0;
	}
	.product-image img{
		width: 100%;
	}
	.product-add-cart {
		display: inline-block;
		padding: 8px 64px;
		margin: 8px 0;
		background: #2d8cf0;
		color: #fff;
		border-radius: 4px;
		cursor:pointer;
	}
   .product-desc {
   		background: #fff;
   	 	margin: 32px;
   	 	padding: 32px;
   	 	border:1px solid #dddee1;
   }
   .product-desc img {
   		display: block;
   		width: 50%;
   		margin: 32px auto;
   		padding: 32px;
   		border-bottom: 1px solid #dddee1;
   }
	
</style>