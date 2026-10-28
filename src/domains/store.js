// state to save list of groceries
const groceries = ref([]);

// getter to access groceries
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// action to add new groceries
export const addGrocery = (grocery) => groceries.value.push(grocery);

