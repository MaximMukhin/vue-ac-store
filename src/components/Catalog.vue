<template>
   <div class="catalog">
      <p>Catalog</p>
            <router-link :to="{name: 'Cart'}">
         <div class="catalog__link-to-cart">Корзина: {{CART.length}}</div>
      </router-link>
      <div class="catalog__list">
         <CatalogItem
         v-for="product in PRODUCTS"
         :key="product.article"
         :productData="product"
         @articleChild="articleParent"
         @addToCart="addToCart"
         ></CatalogItem>
      </div>
   </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
   name: 'Catalog',
   components: {
      CatalogItem
   },
   props:{},
   data() { 
      return {

      }
   },
   methods: {
      ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      ]),

      addToCart(data) {
         this.ADD_TO_CART(data)
      },

      articleParent(data) {
       console.log(data);
      },
   },
   computed: {
         ...mapGetters([
         'PRODUCTS',
         'CART',
      ]),
   },
   watch: {},

   mounted() {
      console.log('mounted axios PRODUCTS');
      this.GET_PRODUCTS_FROM_API()
   },

}
</script>



<style>
.catalog {
   font-size: 12px;
   font-weight: 600;
}

h1 {
   margin: 10px;
}
.catalog__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}
.catalog__link-to-cart {
   font-size: 12px;
   font-weight: 600;
   position: absolute;
   top: 20px;
   right: 20px;
   padding: 14px;
   border: solid #aeaeae;
   border-radius: 10px;
}
</style>