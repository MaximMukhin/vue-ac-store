<template>
   <div class="main">
      <p>Main ac-store</p>
      <hr>
      <Catalog></Catalog>
      <hr>
      <Cart v-if="CART.length !== 0"
      :cartData="CART"
      ></Cart>
   </div>
</template>


<script>
import Catalog from '../components/Catalog.vue'
import Cart from '../components/Cart.vue'
import{mapGetters} from 'vuex'

export default {
   name: 'Main',
   components: {
      Catalog,
      Cart, 
   },
   props:{},
   data() { 
      return {
         title: 'ac-store'
      }
   },
   methods: {},
   computed: {
      ...mapGetters([
         'CART'
      ])
   },
   watch: {},
   mounted() {
      
   },

}
</script>



<style>
.main {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1280;
   margin: 0 auto;
   font-size: 12px;
   color: rgb(48, 48, 48);
}

p {
   margin: 4px;
}
</style>