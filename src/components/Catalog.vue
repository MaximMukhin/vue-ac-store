<template>
   <div class="catalog">
      <p>Catalog</p>
            <router-link :to="{name: 'Cart'}">
         <div class="catalog__link-to-cart">Корзина: {{CART.length}}</div>
      </router-link>

      <SelectFilter
      :selected="selected"
      :options="colors"
      @select="sortByColors"
      />

      <div class="catalog__list">
         <CatalogItem
         v-for="product in filteredProduct"
         :key="product.article"
         :productData="product"
         @articleChild="articleParent"
         @addToCart="addToCart"
         ></CatalogItem>
      </div>
   </div>
</template>

<script>
import SelectFilter from './SelectFilter.vue'
import CatalogItem from './CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
   name: 'Catalog',
   components: {
      CatalogItem,
       SelectFilter,
   },
   props:{},
   data() { 
      return {
         colors: [
            {name: 'Все', value: 'colorAll'},
            {name: 'Белый глянец', value: 'colorWhide'},
            {name: 'Красный глянец', value: 'colorRed'},
         ],
         selected: 'Все',
         sortedProducts: [],
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

      sortByColors(color) {
         this.sortedProducts = []

         this.PRODUCTS.map(item => {
            if (item.color === color.name) {
               this.sortedProducts.push(item)
            }
         }),
         this.selected = color.name
      }
      
   },
   computed: {
         ...mapGetters([
         'PRODUCTS',
         'CART',
      ]),

      filteredProduct() {
         if (this.sortedProducts.length) {
            return this.sortedProducts
         } else {
            return this.PRODUCTS
         }
      },
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
   top: 8px;
   right: 8px;
   padding: 14px;
   border: solid #aeaeae;
   border-radius: 5px;
}

</style>