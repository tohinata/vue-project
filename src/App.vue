<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding HTML</router-link> |
    <router-link to="/dataBindinglist">Data Binding List</router-link> |
    <router-link to="/renderingvif">렌더링 문법 (v-if)</router-link> |
    <router-link to="/eventclick">이벤트 처리 (v-on)</router-link> |
    <router-link to="/computedtest">Computed 테스트</router-link> |    
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
