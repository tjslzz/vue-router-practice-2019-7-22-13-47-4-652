<template>
    <div>
        <div>
        <ul id="filters">
          <li>
            <a  data-filter="all" @click="showAll">ALL</a>
          </li> 
          <li>
            <a data-filter="active" @click="showActive">Active</a>
          </li>
          <li>
            <a data-filter="complete" @click="showComplete">Complete</a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: "Bottom",
  methods:{
     showAll() {
       this.$store.state.condition=1;
       this.$store.commit('filterItem');
    },
    showActive(){
      this.$store.state.condition=2;
       this.$store.commit('filterItem');
    },
    showComplete(){
      this.$store.state.condition=3;
       this.$store.commit('filterItem');
    },
  }
}
  
</script>