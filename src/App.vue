<template>
  <LoadingPage v-if="pokemons.length == 0" />
  <div v-else>
    <PokedexHeader :pokemons="pokemons" @filter-pokemon-list="getPokemonsList"/>
    <PokedexPage :pokemonsPerPage="pokemonsList"/>
    <PokePaginator :pokemons="pokemons" @pokemon-per-page="getPokemonsList"/>
    <PokedexFooter/>
  </div>
</template>

<script>
import PokedexPage from "./pages/PokedexPage.vue";
import PokedexHeader from "@/components/layouts/PokedexHeader.vue";
import PokedexFooter from "@/components/layouts/PokedexFooter.vue";
import LoadingPage from "@/pages/LoadingPage.vue";
import getPokemosHelper from "@/helpers/getPokemonsHelper.js";
import PokePaginator from "@/components/pokePaginator.vue";
export default {
  name: 'Pokedex',
  components: {
    PokedexPage,
    PokedexHeader,
    PokedexFooter,
    LoadingPage,
    PokePaginator
  },
  data(){
    return{
      pokemons: [],
      pokemonsList: [],
    }
  },
  methods: {
    async getPokemons(){
      this.pokemons = await getPokemosHelper();
    },
    getPokemonsList (pokemons) {
      this.pokemonsList = pokemons;
    }
  },
  created() {
    this.getPokemons();
  }
}
</script>

<style>
#app {
  font-family: 'Ubuntu Mono', monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
