<template>
  <div class="card">
    <div class="card-header">
      <img class="img-size" :src="imgSrc" :alt="name">
      <div class="border"></div>
    </div>
    <div class="descripcion">
      <ul>
        <li><b class="color-tag">id: </b> {{ id }}</li>
        <li><b class="color-tag">Name: </b> {{ name }}</li>
      </ul>
      <button class="btn-modal">Info</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    imgSrc () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    }
  }
}
</script>

<style scoped>
.card{
  padding: 0.8em;
  width: 10em;
  height: 13em;
  background-color: #372248;
  border-radius: 5px;
  margin: 10px 5px 10px 5px;
  position: relative;
}

.card::before, .card::after{
  content: "";
  display: block;
  background: #F46036;
  position: absolute;
  left: 0;
  transition: all 0.3s;
}

.card::before{
  bottom: 0;
  height: 3px;
  width: 0;
  box-shadow: 0 -14.444em #F46036;
}

.card::after{
  top: 0;
  height: 0;
  width: 3px;
  box-shadow: 11.444em 0 #F46036;
}

.card:hover::before{
  width: 100%;
}

.card:hover::after{
  height: 100%;
}

.img-size{
  max-width: 8em;
  max-height: 4em;
}

.border{
  width: 8em;
  height: 0.3em;
  background: silver;
  margin-top: 0.8em;
  margin-bottom: 0.8em;
}

.descripcion{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

.card-header{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

li{
  list-style: none;
  color: #fff;
  text-align: start;
}

ul{
  padding-left: 1em;
}

.color-tag{
  color: #5B85AA;
}

.btn-modal{
  border-radius: 20px;
  background-color: #F46036;
  color: #fff;
  height: 2em;
  width: 3.5em;
  border: 2px solid #fff;
  margin-left: 3em;
}
</style>