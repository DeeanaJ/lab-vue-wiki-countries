<template>
    <div>
    </div>
</template>
<script>

import { mapActions, mapState } from 'pinia';
impo

export default {
    name: 'CountryDetails',
    computed: {
        ...mapState(countryStore,['countries']),
    },
}

</script>