const FilterReducer = (state, action) => {
  switch (action.type) {
    case "Load_Filter_Product":
      return {
        ...state,
        filter_Product: [...action.payload],
        all_product: [...action.payload],
      };
    case "Get_sort_Value":
      // let userSortValue = document.getElementById("sort_select");
      // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        Sorting_value: action.payload,
      };
    case "Sorting_Product":
      let NewSortData;
      const { filter_Product, Sorting_value } = state;
      let tempSortData = [...filter_Product];
      const SortingProducts = (a, b) => {
        // 1 Example with if Condition
        // if (Sorting_value === "lowest") {
        //   return a.price - b.price;
        // }
        // if (Sorting_value === "highest") {
        //   return b.price - a.price;
        // }
        // if (Sorting_value === "a-z") {
        //   return a.name.localeCompare(b.name);
        // }
        // if (Sorting_value === "z-a") {
        //   return b.name.localeCompare(a.name);
        // }

        // 2 example with switch case

        switch (Sorting_value) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);

          default:
            return filter_Product;
        }
      };

      NewSortData = tempSortData.sort(SortingProducts);

      return {
        ...state,
        filter_Product: NewSortData,
      };

    case "Get_search_Value":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "Filter_Products":
      let { all_product } = state;
      let tempFilterProduct = [...all_product];

      const { SearchValue, categories, companyName } = state.filter;
      if (SearchValue) {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.name.toLowerCase().includes(SearchValue);
        });
      }
      if (categories !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.category === categories;
        });
      }
      if (companyName !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.company === companyName;
        });
      }

      return {
        ...state,
        filter_Product: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;
