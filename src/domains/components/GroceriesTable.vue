<script setup>
import { ref, computed } from 'vue'
import { groceries } from '../store.js'

defineProps({
  groceries: {
    type: Array,
  }
})
const prices = ref([1.00, 0.99, 1.20, 2.99])
const quantities = ref ([1, 2, 4, 0])

// computed: change in quantity updates subtotal and total
const subtotals = 
    computed(() => prices.value.map((price, i) => price*quantities.value[i]))

    const total = 
    computed(() => subtotals.value.reduce((sum, s) => sum + s, 0))

</script>

<template>
    <h3>---Shopping List---</h3>

<table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(grocery, index) in groceries" :key="index">
        <td>{{ grocery }}</td>
        <td>{{ prices[index].toFixed(2) }}</td>
        <td>
          <input type="number" min="0" v-model.number="quantities[index]" />
        </td>
        <td>{{ subtotals[index].toFixed(2) }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td>{{ total.toFixed(2) }}</td>
      </tr>
    </tfoot>
    </table>


</template>
