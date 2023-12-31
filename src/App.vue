
<template>
  <header>

    <div class="wrapper">


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/testing">Testing</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>

</style>
