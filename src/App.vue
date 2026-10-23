<script setup>
import GroceriesTable from './components/GroceriesTable.vue'
import { ref } from 'vue'
const products = ref(["Rice", "Broccoli", "Cookies", "Nuts"])
</script>

<template>
    <GroceriesTable :products="products"/>
</template>