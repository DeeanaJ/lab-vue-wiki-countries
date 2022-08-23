<template>
    <router-link to="/:countryCode"> {{ countries.name.common }} </router-link>
</template>

<script>

import countries from '/public/countries.json';

export default {
    name: 'CountriesList',
    data() {
        return {
            countries: countries.name.common,
        };
    },
}
</script>