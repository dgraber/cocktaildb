<template>
<div>
    <div v-bind:key="drink.idDrink" v-for="drink in drinkDetails.drinks">
        <div class="mt-4">
            <router-link to="/"><b-button variant="primary" class="backToDrinks">Back to Drinks</b-button></router-link>
        <h1>{{drink.strDrink}}</h1>
            <b-card :img-src="drink.strDrinkThumb" :img-alt="drink.strDrink" img-left class="mb-3">
            <b-card-text style="text-align:left;">
                <h2>Ingredients</h2>
                <ul class="ingredients">
                    <li v-if="drink.strIngredient1 !==null">{{drink.strIngredient1}}</li>
                    <li v-if="drink.strIngredient2 !==null">{{drink.strIngredient2}}</li>
                    <li v-if="drink.strIngredient3 !==null">{{drink.strIngredient3}}</li>
                    <li v-if="drink.strIngredient4 !==null">{{drink.strIngredient4}}</li>
                    <li v-if="drink.strIngredient5 !==null">{{drink.strIngredient5}}</li>
                    <li v-if="drink.strIngredient6 !==null">{{drink.strIngredient6}}</li>
                    <li v-if="drink.strIngredient7 !==null">{{drink.strIngredient7}}</li>
                    <li v-if="drink.strIngredient8 !==null">{{drink.strIngredient8}}</li>
                    <li v-if="drink.strIngredient9 !==null">{{drink.strIngredient9}}</li>
                    <li v-if="drink.strIngredient10 !==null">{{drink.strIngredient10}}</li>
                    <li v-if="drink.strIngredient11 !==null">{{drink.strIngredient11}}</li>
                    <li v-if="drink.strIngredient12 !==null">{{drink.strIngredient12}}</li>
                    <li v-if="drink.strIngredient13 !==null">{{drink.strIngredient13}}</li>
                    <li v-if="drink.strIngredient14 !==null">{{drink.strIngredient14}}</li>
                    <li v-if="drink.strIngredient15 !==null">{{drink.strIngredient15}}</li>
                </ul>
            </b-card-text>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'DrinkDetails',
    props: ['idDrink'],
    methods: {
        ...mapActions(['fetchDrinkDetails'])
    },
    computed: mapGetters(['drinkDetails']),
    created() {
        this.fetchDrinkDetails(this.idDrink);
    }

  }

</script>

<style scoped>
 .backToDrinks {
     align-content: left;
 }
</style>