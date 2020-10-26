<template>
<div>
    <b-container fluid>
        <!-- <SearchDrinks v-model="searchString" /> -->
        <b-button v-b-modal.modal-1 variant="primary">Search Drinks</b-button>

  <b-modal id="modal-1" title="The CocktailDB">
    <input type="text" v-model="searchString" placeholder="Search Drink Name..." />
  </b-modal>
    <div class="drinks">
        <div v-bind:key="drink.idDrink" v-for="drink in filteredDrinks">

            <router-link :to="{name: 'DrinkDetails', params: {idDrink: drink.idDrink }}"><b-card
                :title="drink.strDrink"
                :img-src="drink.strDrinkThumb"
                :img-alt="drink.strDrink"
                img-top
                tag="article"
                class="mb-2"
                >

            </b-card></router-link>

        </div>
    </div>
    </b-container>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import SearchDrinks from './SearchDrinks';

export default {
    name: "Drinks",
    props: ['idDrink'],
    components: {
        // SearchDrinks
    },
    data() {
        return {
        searchString: '',
        }
    },
    methods: {
        ...mapActions(['fetchDrinks']),
    },
    computed: {...mapGetters(['drinks']),
    filteredDrinks: function() {
            return this.drinks.drinks.filter((drink) => {
                return drink.strDrink.toLowerCase().match(this.searchString);
            });
        },
        
    },
        
    created() {
        this.fetchDrinks();
    }
}
</script>

<style scoped>
.drinks {
    display: flex;
    flex-wrap: wrap;
}
 .mb-2 {
     max-width: 19rem;
     margin: 4% 9%;
     height: 330px;
     border: 1px solid #000000;
     box-shadow: 5px 10px 8px #888888;
 }
 
 .mb-2:hover{
     border: 5px solid #0080FF;
     box-shadow: 10px 15px 13px #888888;
     transform: scale(1.04);
 }

 .card-title {
     font-size: 18px;
 }

 .drinkDetails {
     
     vertical-align: baseline;
     position: absolute;
     text-align: center;
        bottom: 0;
 }

</style>