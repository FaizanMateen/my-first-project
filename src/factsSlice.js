import { FACTS } from "./data/data-facts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: FACTS,
  filteredFacts: FACTS,
  // article: {
  //   id: 1,
  //   text: "As of 2024, Apple Inc. is the most valuable publicly traded company in the world with a market capitalization of over $3 trillion.",
  //   source:
  //     "https://www.statista.com/statistics/263264/top-companies-in-the-world-by-market-value/",
  //   category: "finance",
  //   votesFalse: 5,
  //   votesInteresting: 18,
  //   votesMindblowing: 7,
  // },
};
export const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    increment(state, action) {
      // write action here.........`
      const { id, votes } = action.payload;
      const fact = state.facts.find((item) => item.id === id);
      const filterdFact = state.filteredFacts.find((item) => item.id === id);

      fact[votes]++;
      filterdFact[votes]++;
    },
    filter(state, action) {
      state.filteredFacts = state.facts.filter(
        (item) => item.category === action.payload,
      );
    },
    addItem(state, action) {
      state.facts.push(action.payload);
      state.filteredFacts.push(action.payload);
    },
  },
});

export const { increment, filter, addItem } = factsSlice.actions;
// console.log(initialState.newFacts);

export const getFacts = (state) => state.facts.filteredFacts;

export default factsSlice.reducer;
