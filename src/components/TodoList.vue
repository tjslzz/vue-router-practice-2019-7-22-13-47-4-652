<template>
  <div>
    <ol>
      <li
        v-for="(item, index) in  itemsShow"
        v-bind:key="item.key"
        v-bind:class="{ checked: item.isChecked }"
      >
        <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" />
        <span
          @dblclick="editable=true"
          :contenteditable="editable"
          @keydown.enter="updatable(item, index)"
          ref="info"
        >{{item.checkString}}</span>
        <button @click="deleteItem(item)">delete</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    itemsShow() {
      return this.$store.state.itemsShow;
      
    }
  },
  data() {
    return {
      editable: false
    };
  },
  methods: {
    updatable(item, index) {
        this.editable = false;    
         console.log(this.$refs.info[index].innerHTML);
        item.checkString = this.$refs.info[index].innerHTML;
        console.log(item.id);
         let itemNow={id:item.id,checkString:item.checkString,isChecked:false};  
         this.$store.dispatch("update",itemNow);
      
    },
    deleteItem(item){      
         this.$store.dispatch("delete",item.id);
         this.$store.dispatch("getItem");
         this.$store.commit('filterItem');
    }
  }
};
</script>
<style  scoped>
button{
  float: right;
}
</style>

