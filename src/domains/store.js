import {reactive, computed} from 'vue'

// state to save list of groceries
export const groceries = reactive(["Rice", "Broccoli", "Cookies", "Nuts"]);

// getter to access groceries
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// action to add new groceries
export const addGrocery = (grocery) => groceries.value.push(grocery);
