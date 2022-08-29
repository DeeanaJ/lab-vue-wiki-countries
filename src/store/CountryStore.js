import { defineStore } from 'pinia';

export default defineStore('countryStore', {
    state: () => {
        return {
            countries: [],
            countrySelectedCode: '',
        }
    },
    getters: {
        getCountries() {
            let countryId = 0;
            return this.countries.map(country => {
                return {
                    id: countryId++,
                    name: country.name.common,
                    alpha2Code: country.alpha2Code,
                    alpha3Code: country.alpha3Code,
                }
            });
        },
        countrySelected() {
            const countryFound = this.countries.find(country => country.alpha3Code === this.countrySelectedCode);
            if(countryFound){
                return {
                    alpha2Code: countryFound.alpha2Code.toLowerCase(),
                    name: countryFound.name.common,
                    capital: countryFound.capital[0],
                    borders: countryFound.borders,
                    area: countryFound.area,
                };
            }
            return null;
        },
    },
    actions: {
        async fetchCountries() {
            const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
            const countriesData = await response.json();
            this.countries = countriesData.reverse();
        },
        getCountry(countryCode) {
            this.countrySelectedCode = countryCode;
        },
    },
});