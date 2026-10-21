<script setup>

const products = ref(["Rice", "Broccoli", "Cookies", "Nuts"])

const count = ref ()

// computed: change in quantity updates subtotal and total

</script>

<template>
    <h3>---Shopping List---</h3>

    <table>
        <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </thead>
        <tbody>
            <th>Rice</th>
        </tbody>
    </table>
</template>
