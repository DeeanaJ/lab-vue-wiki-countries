<template>
  <div id="country-details" class="col-7" v-if="countryFound !== null">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code}.png`"
    />
    {{ countryFound.name }}
    <h1>{{ countryFound.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ countryFound.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ countryFound.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li>
                <a>
                  <router-link
                    v-for="border in countryFound.borders"
                    :key="border"
                    :to="border"
                  >
                    {{ border }}
                  </router-link>
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import countriesData from "/public/countries.json";
import CountryStore from "../store/CountryStore.js";

export default {
  name: "CountryDetails",
  watch: {
    "$route.params"(newParams) {
      if (newParams.countryCode) {
        this.getCountry(newParams.countryCode);
      }
    },
  },
  computed: {
    ...mapState(CountryStore, ["countrySelected"]),
  },
  methods: {
    ...mapActions(CountryStore, ["getCountry"]),
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countriesData.length && countryCode) {
      const info = countriesData.filter(
        (country) => country.alpha3Code === countryCode
      )[0];
      this.countryFound = {
        alpha2Code: info.alpha2Code.toLowerCase(),
        name: info.name.common,
        capital: info.capital[0],
        borders: info.borders,
        area: info.area,
      };
    }
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        if (countriesData.length && toParams.countryCode) {
          const info = countriesData.filter(
            (country) => country.alpha3Code === toParams.countryCode
          )[0];
          this.countryFound = {
            alpha2Code: info.alpha2Code.toLowerCase(),
            name: info.name.common,
            capital: info.capital[0],
            border: info.borders,
            area: info.area,
          };
        }
      }
    );
  },
};
</script>

<style scoped>

#country-details {
    width: 30%;
}

ul {
    list-style: none;
}

a {
    margin: 10px;
    display: flex;
    flex-direction: column;
}
</style>
