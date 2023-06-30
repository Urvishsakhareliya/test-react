const FilterReducer = (state, action) => {
  switch (action.type) {
    case "Load_Filter_Product":
      return {
        ...state,
        filter_Product: [...action.payload],
        all_payload: [...action.payload],
      };
    case "Get_sort_Value":
      let userSortValue = document.getElementById("sort_select");
      let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sortValue);
      return {
        ...state,
        Sorting_value: sortValue,
      };
    case "Sorting_Product":
      let NewSortData;
      let tempSortData = [...action.payload];

      if (state.Sorting_value === "lowest") {
        const priceLowest = (a, b) => {
          return a.price - b.price;
        };
        NewSortData = tempSortData.sort(priceLowest);
      }
      if (state.Sorting_value === "highest") {
        const priceLowest = (a, b) => {
          return b.price - a.price;
        };
        NewSortData = tempSortData.sort(priceLowest);
      }
      if (state.Sorting_value === "a-z") {
        NewSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.Sorting_value === "z-a") {
        NewSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filter_Product: NewSortData,
      };

    default:
      return state;
  }
};

export default FilterReducer;
