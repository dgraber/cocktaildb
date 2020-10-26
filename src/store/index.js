import Vuex from 'vuex';
import Vue from 'vue';
import DrinksModule from './modules/drinksModule';
import DrinkDetailsModule from './modules/drinkDetailsModule';


//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        DrinksModule,
        DrinkDetailsModule
    }
})