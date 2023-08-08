import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jops: [],
  filteredJops: [],
  initialized: false,
};
const JopsSlice = createSlice({
  name: "jopsSlice",
  initialState,
  reducers: {
    setJops: (state, action) => {
      state.jops = action.payload;
      state.filteredJops = action.payload;
      state.initialized = true;
    },
    addJop: (state, action) => {
      state.jops.push(action.payload);
    },
    //arama terimine göre filtreleme
    filterBySearc: (state, action) => {
      const query = action.payload.toLowerCase();
      /*
      1- filtrelenicek kelimeyi al
      2- filtreleme yap
      */
      //aksiyonla gelen arama terimiyle eşleşen objelerle yeni bir dizi oluştur
      const filtered = state.jops.filter((jop) =>
        jop.company.toLowerCase().includes(query)
      );
      state.filteredJops = filtered;
    },

    filteredByStatus: (state, action) => {
      const filterBystate = state.jops.filter(
        (jop) => jop.status === action.payload
      );
      state.filteredJops = filterBystate;
    },

    filteredByType: (state, action) => {
      const filterBytypes = state.jops.filter(
        (jop) => jop.type === action.payload
      );
      state.filteredJops = filterBytypes;
    },

    sortJops: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.filteredJops.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return +1;
            return 0;
          });
          break;

        case "z-a":
          state.filteredJops.sort((a, b) => {
            if (a.company < b.company) return +1;
            if (a.company > b.company) return -1;
            return 0;
          });
          break;

        case "En Yeni":
          /* eğer sıralama işlemleri yapılıyosa tarihlerle
          ozaman birinden diğerini çikarmamız lazım
          */
          state.filteredJops.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          break;

        case "En Eski":
          state.filteredJops.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          break;

        default:
          break;
      }

      return state;
    },

    // filtreleri temizleme
    clearFilter: (state) => {
      state.filteredJops = state.jops;
    },
  },
});

export const {
  setJops,
  addJop,
  filterBySearc,
  filteredByStatus,
  filteredByType,
  sortJops,
  clearFilter,
} = JopsSlice.actions;

// jopsSlice ın bizim için oluşturduğu reducuru export edelim edelşm
export default JopsSlice.reducer;
