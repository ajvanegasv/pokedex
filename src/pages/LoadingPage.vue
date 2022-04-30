<template>
  <div class="loader">
    <img src="@/assets/pokeball-v2.png" alt="pokeball">
    <h1>Cargando 649 Pokemons, Por favor espere...</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader{
  width: 100vw;
  height: 100vh;
  background-color: #414770;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  flex-direction: column;
  color: #fff;
}

img{
  height: 20em;
  width: 19em;
}
</style>