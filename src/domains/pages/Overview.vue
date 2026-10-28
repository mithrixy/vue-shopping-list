<script setup>
import GroceriesTable from '../components/GroceriesTable.vue'
import { ref } from 'vue'

const products = ref(["Rice", "Broccoli", "Cookies", "Nuts"])

defineProps({
  groceries: Array
})
  
console.log('overview loaded')
//retrieve groceries from store 
//use getter to retrieve list of groceries + display in table
</script>

<template>
    <GroceriesTable :products="products"/>
</template>
