<template>
   <div class="select-filter">
      <p 
      class="select-filter__title"
      @click="areOptionVisible = !areOptionVisible"
      >{{selected}}</p>
      <div 
      class="select-filter__option"
      v-if="areOptionVisible"
      >
         <p
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
         >
            {{option.name}}
         </p>
      </div>
   </div>
</template>

<script>
   export default {
      name: "SelectFilter",
      props: {
         options: {
            type: Array,
            default() {
               return [];
            },
         },
         selected: {
            type: String,
            default: '',
         },
      },
      data() {
         return {
            areOptionVisible: false,
         }
      },
      computed: {},
      methods: {
         selectOption(option) {
            this.$emit('select', option)
            this.areOptionVisible = false;
         },

         hideSelect() {
            this.areOptionVisible = false;
         },

      },

      mounted() {
         document.addEventListener('click', this.hideSelect.bind(this), true)
      },

      beforeUnmount() {
         document.removeEventListener('click',this.hideSelect)
      },

   };
</script>

<style>
.select-filter {
    position: relative;
    width: 200px;
    cursor: pointer;
    text-align: left;
    bottom: 10px;
    margin-left: 10px;

}

.select-filter p {
   margin: 0;
}

.select-filter__title {
    border: solid 1px #aeaeae;
    padding: 8px;
    border-radius: 4px;
}

.select-filter__option {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
}

.select-filter__option p:hover {
   background: #e7e7e7;
}
</style>
