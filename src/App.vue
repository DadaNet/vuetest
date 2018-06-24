<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/coins/bitcoin">Bitcoin</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
    <router-link to="/coins/dash">Dash</router-link>
    <router-link to="/coins/ethereum-classic">Ethereum classic</router-link>
    <router-link to="/coins/ripple">Ripple</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
