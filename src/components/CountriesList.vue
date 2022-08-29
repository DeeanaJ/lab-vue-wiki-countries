<template>
    <div class="scrollable list-group">
        <div class="col-5" id='countries-list'>
    <router-link v-for='country in getCountries' 
    :key='country.id'
    :to="country.alpha3Code">
    <div class='list-group-item list-group-item-action'>
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
     {{ country.name.common }} </div>
     </router-link>
        </div>
    </div>
</template>

<script>

import CountryStore from '../store/CountryStore.js';
import { mapState } from 'pinia';

export default {
    name: 'CountriesList',
    computed: {
        ...mapState(CountryStore, ['getCountries']),
    },
};
</script>

<style scoped>
.scrollable a img {
    padding-right: 10px;
}

.countries-list {
    overflow: scroll;
}
</style>
