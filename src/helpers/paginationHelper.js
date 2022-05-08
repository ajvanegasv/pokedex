import {ref, computed} from "vue";

export default function handlePagination(dataArr) {
  let page = ref(1);
  const perPage = 24;
  const buttonsViews = 6;
  const data = dataArr.map(({data}) => data);

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  const listButtons = computed(() => {
    /** esta constante retorna la cantidad de botones que debe haber en todo el paginador */
    const arrButtons = Array.from(Array(Math.ceil(data.length / perPage))).map((_, index) => index + 1);
    return arrButtons.splice((page.value - 1), buttonsViews)
  });

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage, listButtons};
}