import { FACTS } from "../data/data-facts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: FACTS,
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
      // write action here.........
    },
  },
});

export const { increment } = factsSlice.actions;

export const getFacts = (state) => state.facts.facts;

export default factsSlice.reducer;
