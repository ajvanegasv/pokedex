<template>
  <div class="header">
    <div class="container-1">
      <img class="img" src="@/assets/pokeball-v2-31x32.png" alt="Pokeball">
      <h1 class="title">PokeDex</h1>
    </div>
    <label class="container-1">
        <Magnify />
        <input @input="filtrarPokemons" class="input-search" type="text">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
      default: []
    }
  },
  methods: {
    filtrarPokemons (e) {
      const text = new RegExp(e.data);
      const pokemonFilters = this.pokemons.filter(({data}) => data.name == e.data);
      const pokemonList = pokemonFilters.map(({data}) => data);
      console.log(pokemonList)
      this.$emit('filterPokemonList', pokemonList);
    }
  }

}
</script>

<style scoped>
.header{
  position: sticky;
  width: 100%;
  height: 4em;
  background-color: #414770;
  display: flex;
  color: #ffff;
  justify-content: space-around;
}

.container-1{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input-search{
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  border: 2px solid #def;
  color: #fff;
}

.input-search:focus{
  border: 2px solid #F46036;
}

</style>