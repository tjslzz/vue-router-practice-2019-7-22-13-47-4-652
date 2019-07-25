<template>
    <div>
        <div>
        <h2>hello,Welcome to here</h2>
        <el-input class="username" placeholder="please enter name" v-model="username"></el-input>
         <el-button type="primary" @click="turnPage">开始使用</el-button>
      </div>
     
    </div>
</template>
<script>

export default {
  name: "Main",
  
  data() {
    return {
      username: "",
      
    };
  },
  methods: {
    turnPage(){
      this.$router.push({ path: '/home', params: { username:this.username }}) ;// -> /user/123
    }
  },

}
</script>
<style>
.username{
  width: 20%;
}
</style>
