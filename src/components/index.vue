<template>
  <div class="index">
    <div class="container">
      <v-header/>
       <div>
        <input class="input-text" type="text" v-model="checkString" />
        <div id="button" @click="addItem">Add</div>
      </div>
      <br />
      <v-content />
      <v-footer/>

    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList"
import Top from "./Top"
import Bottom from "./Bottom.vue"
export default {
  name: "index",
  components: {
      "v-content": TodoList,
      "v-header": Top,
      "v-footer": Bottom,
  },
  data() {
    return {
      checkString: "",
      
    };
  },
  methods: {
    addItem(){

      let item={checkString:this.checkString,isChecked:false};
      this.$store.dispatch('add',item);
      this.$store.dispatch("getItem");    
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/todo.css");

</style>
