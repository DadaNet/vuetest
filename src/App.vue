<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>