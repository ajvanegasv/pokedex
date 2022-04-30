<template>
  <div class="pokedex-page">
    <div class="pokedex-cards">
      <PokemonCard v-for="{id, name} in pokemonsPerPage" :key="id" :id="id" :name="name"/>
    </div>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  components: {
    PokemonCard
  },
  props: {
    pokemonsPerPage: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style scoped lang="css">
.pokedex-page{
  width: 100%;
  min-height: calc(100vh - 8em);
  background-color: #414770;
  display: flex;
  justify-content: center;
}

.pokedex-cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5em;
}

</style>