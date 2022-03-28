<template>
   <div class="cart">
      <p>Cart</p>
      <CartItem></CartItem>
   </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
   name: 'Cart',
   components: {
      CartItem
   },
   props:{},
      data() { 
      return {}
   },
   methods: {},
   computed: {},
   watch: {},

}
</script>



<style>

</style>