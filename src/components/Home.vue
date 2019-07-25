<template>
<el-container>
    <el-header>
        <el-button type="primary" @click="returnMain">back</el-button>   
        <span class="username">hi,{{$route.params.username}}</span>    
    </el-header>
    <el-container>
  <el-aside width="200px">
      <el-menu>  
        <el-menu-item index="1-1" @click="turntoMypage">我的</el-menu-item>
        <el-menu-item index="1-2" @click="turnToIndex">TodoList列表</el-menu-item>
    </el-menu>
  </el-aside>
  
    <el-main><router-view/> </el-main>
  </el-container>
</el-container>
    <!-- <div>
        <div class="header">
        <input type="button" @click="returnMain" value="back"/>
        <span class="username">hi,{{$route.params.username}}</span>
      </div>
      
<body>
<div class="s-side">
	<ul>
		
		<li class="s-firstItem first">
			<a href="#">
				<i class="fa fa-home"></i>
				<span>首页</span>
			</a>
		</li>
		
		<li class="first"  @click="turntoMypage">
			<div class="d-firstNav s-firstNav clearfix">
				<i class="fa fa-bars"></i>
				<span>我的</span>
				<i class="fa fa-caret-right fr "></i>
			</div>
		</li>
		<li class="first"  @click="turnToIndex">
			<div class="d-firstNav s-firstNav">
				<i class="fa fa-bars"></i>	                    
				<span >TodoList列表</span>
				<i class="fa fa-caret-right fr" ></i>
			</div>
		</li>
	</ul>
</div>
  <router-view/>
</body>
   
    </div> -->
</template>
<script>
import index from "./index";

export default {
    
   components: {
      "index": index,
  },

     computed: {
        username () {     
         return this.$route.params.username
     }
    },
    methods:{
        returnMain(){
                this.$router.push({ name: 'main', }) ;
        },
         turnToIndex(){
            this.$router.push({ name: 'index', }) ;   
        },
        turntoMypage(){
             this.$router.push({ name: 'mypage', }) ;
        }
    },
    beforeRouteLeave (to, from , next) { 
        const answer = window.confirm('Do you really want to leave? ')
        if (answer) {
            next()
        } else {
            next(false)
        }
    }

}
</script>
<style scoped>


</style>
