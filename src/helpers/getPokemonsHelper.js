import pokeApi from "@/api/PokeApi.js";

const initializeArray_ = () => {
  const pokeArr = Array.from(Array(649));
  return pokeArr.map((_, index) => index + 1);
}

const PokemonObjArr = async (pokeArr) => {
  const promiseArr = pokeArr.map((value, _) => pokeApi.get(`/${value}`))
  const responseArr = await Promise.all(promiseArr);

  return responseArr;
}

export default async () => {
  const initializeArray = initializeArray_();
  const pokemons = await PokemonObjArr(initializeArray);
  return pokemons;
}