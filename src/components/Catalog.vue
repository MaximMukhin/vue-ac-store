<template>
   <div class="catalog">
      <p>Catalog</p>
      <CatalogItem></CatalogItem>
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
      return {}
   },
   methods: {},
   computed: {},
   watch: {},

}
</script>



<style>

</style>