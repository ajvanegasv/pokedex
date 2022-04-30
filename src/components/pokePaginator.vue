<template>
  <div class="pagination">
    <button class="btn" @click="() => {backPage(); $emit('pokemonPerPage', paginatedData)}">prev</button>
    <button
      class="buttons-paginator"
      v-for="item in listButtons"
      :key="item"
      @click="() => {goToPage(item); $emit('pokemonPerPage', paginatedData)}"
      >
      {{ item }}
    </button>
    <button class="btn" @click="() => {nextPage(); $emit('pokemonPerPage', paginatedData)}">next</button>
  </div>
</template>

<script>
import handlePagination from "@/helpers/paginationHelper.js";
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
      default: []
    }
  },
  setup({pokemons}) {
    const handlePaginationData = handlePagination(pokemons);
    return {...handlePaginationData};
  },
  methods: {
    emitirPokemons () {
      this.$emit('pokemonPerPage', this.paginatedData);
    },
  },
  mounted () {
    this.emitirPokemons();
  }
}
</script>

<style scoped>
.pagination {
  padding: 2em;
  background-color: #414770;
}

.pagination > button {
  margin-left: 1px;
  margin-right: 1px;
}

.buttons-paginator {
  border-radius: 50%;
  height: 2em;
  width: 2em;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.buttons-paginator:hover{
  background-color: #F46036;
}

.btn {
  border-radius: 20px;
  background-color: #372248;
  color: #fff;
  height: 2em;
  width: 3.5em;
  border: 2px solid #fff;
}

.btn:hover{
  background-color: #F46036;
}
</style>