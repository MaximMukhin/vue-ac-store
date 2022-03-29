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
.cart-total {
position: fixed;
bottom: 0;
right: 0;
left: 0;
padding: 10px;
display: flex;
justify-content: center;
background: rgb(105, 173, 105);
color: #ffffff;
}


</style>