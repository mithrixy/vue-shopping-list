<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const products = ref(["Rice", "Broccoli", "Cookies", "Nuts"])
const prices = [1.00, 0.99, 1.20, 2.99]
const quantities = ref ([1, 2, 4, 0])

// computed: change in quantity updates subtotal and total
//const subTotal = computed(() => products.value*price.value)
//const total = computed(() => subTotal.reduce())
</script>

<template>
    <h3>---Shopping List---</h3>

    <table>
        <th>Product</th>
            <tr v-for="(product, index) in products" :key="index">
                <td >{{ product }}</td>
            </tr>
        <th>Price</th>
            <tr v-for="(price, index) in prices" :key="index">
                <td >{{ price }}</td>
            </tr>  
        <th>Quantity</th>    
            <tr v-for="(quantity,index) in quantities" :key="index">
                <td >{{ quantity }}</td>
            </tr>
        <th>Subtotal</th>
            <tr></tr>
       
    </table>


</template>
