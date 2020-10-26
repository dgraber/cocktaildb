import axios from 'axios';

const state = {
    drinks: []
};

const getters = {
    drinks: state => state.drinks
};

const actions = {
    async fetchDrinks({ commit }) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
        commit('setDrinks', response.data);
    }
};

const mutations = {
    setDrinks: (state, drinks) => (state.drinks = drinks),

};

export default {
    state,
    getters,
    actions,
    mutations
}