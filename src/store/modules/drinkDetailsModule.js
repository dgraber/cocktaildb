import axios from 'axios';

const state = {
    drinkDetails: []
};

const getters = {
    drinkDetails: state => state.drinkDetails
};

const actions = {
    async fetchDrinkDetails({ commit }, idDrink) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
        commit('setDrinkDetails', response.data);
    }
};

const mutations = {
    setDrinkDetails: (state, drinkDetails) => (state.drinkDetails = drinkDetails)
};

export default {
    state,
    getters,
    actions,
    mutations
}