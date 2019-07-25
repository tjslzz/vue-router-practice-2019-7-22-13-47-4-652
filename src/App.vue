<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  },
   mounted() {
      this.$store.dispatch("getItem");
  }
}
</script>
