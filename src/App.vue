<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div class="wrapper">

    <nav class="mt-2 ms-2 rounded border shadow ">
      <div class="sidebar_menu">
        <div>
          <RouterLink to="/employee">Employee</RouterLink>
        </div>
        <div>
          <RouterLink to="/patient">Patient</RouterLink>
        </div>
      </div>
    </nav>
    <div class="mt-2 dashboard_main_content flex-wrap-1 ">
      <RouterView />

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
position: relative;
}
.wrapper nav{
  height: 90vh;
  position: fixed;
  left: 0;
}
.sidebar_menu{
  width: 150px;
  margin-top: 20px;
  text-indent: 15px;
}
.dashboard_main_content{
  position: absolute;
  left: 200px;
  right: 20px;
}
a{
  text-decoration: none;
  color: rgb(156, 150, 150);
}
.router-link-active{
color: rgb(56, 32, 190);
}
</style>
