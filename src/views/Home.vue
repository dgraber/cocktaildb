<template>
  <div class="home">
    
    <Drinks />
  </div>
</template>

<script>
// @ is an alias to /src

import Drinks from '../components/Drinks.vue';

export default {
  name: "Home",
  components: {
    Drinks
  }

};
</script>
