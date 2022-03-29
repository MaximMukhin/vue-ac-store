<template>
   <div class="catalog">
      <p>Catalog</p>
      <div class="catalog__list">
         <CatalogItem
         v-for="product in products"
         :key="product.article"
         :productData="product"
         @articleChild="articleChild"
         ></CatalogItem>
      </div>

   </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'

export default {
   name: 'Catalog',
   components: {
      CatalogItem
   },
   props:{},
   data() { 
      return {
         products: [
      {
         image: "Bella-T01-90.jpg",
         name: "Bella-T01-90",
         article: "Bella-T01-90",
         price: 42000,
         available: true,
         color: "Белый глянец"
      },
      {
         image: "Natali-T01-90.jpg",
         name: "Natali-T01-90",
         article: "Natali-T01-90",
         price: 40000,
         available: true,
         color: "Белый глянец"
      },
      {
         image: "Sofia-T01-90.jpg",
         name: "Sofia-T01-90",
         article: "Sofia-T01-90",
         price: 38000,
         available: false,
         color: "Белый глянец"
      },
      {
         image: "Bella-T01-100.jpg",
         name: "Bella-T01-100",
         article: "Bella-T01-100",
         price: 52000,
         available: true,
         color: "Красный глянец"
      },
      {
         image: "Natali-T01-100.jpg",
         name: "Natali-T01-100",
         article: "Natali-T01-100",
         price: 50000,
         available: false,
         color: "Красный глянец"
      },
      {
         image: "Sofia-T01-100.jpg",
         name: "Sofia-T01-100",
         article: "Sofia-T01-100",
         price: 48000,
         available: true,
         color: "Красный глянец"
      }
         ]
      }
   },
   methods: {
      articleChild(data) {
       console.log(data);
      }
   },
   computed: {},
   watch: {},

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