<template>
  <div>
    <div class="header">
      <router-link to="/list" class="header-title">电商网站</router-link>
      <div class="header-menu">
        <router-link to="/cart" class="header-menu-cart">
           购物车
           <span v-if="cartlist.length">{{cartlist.length}}</span>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    cartlist(){
      return this.$store.state.cartList;
    }
  }
}
</script>

<style>

</style>
