<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/overview">Overview</RouterLink>
    
    <p></p>
    <RouterLink to="/create">Create</RouterLink>    

    <RouterView />
</nav>
</template>

