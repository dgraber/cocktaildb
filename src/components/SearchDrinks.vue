<template>
    <div>
        <b-button v-b-modal.modal-1>Search Drinks</b-button>

  <b-modal id="modal-1" title="The CocktailDB">
    <input type="text" v-model="searchString" placeholder="Search Drink Name..." />
  </b-modal>
    </div>
</template>

<script>
export default {
    name: "SearchDrinks",
    computed: {
         filteredDrinks: function() {
            return this.drinks.drinks.filter((drink) => {
                return drink.strDrink.toLowerCase().match(this.searchString);
            });
        },
    },
    data() {
        return {
        searchString: '',
        }
    },
}

</script>

<style scoped>

</style>