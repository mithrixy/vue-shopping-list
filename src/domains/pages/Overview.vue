<script setup>
import GroceriesTable from '../components/GroceriesTable.vue'
import { groceries } from './store.js'

console.log('overview loaded')

</script>

<template>
    <GroceriesTable :groceries="groceries"/>
</template>
