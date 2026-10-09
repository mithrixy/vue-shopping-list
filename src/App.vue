<script setup>
// products array
const array = ref([])

// computed: change in quantity updates subtotal and total

</script>

<template>
    <h3>---Shopping List---</h3>

    <table>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        <tr v-for="(meow, index) in bigmeow" :key="index">
            <th></th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</template>
