const createSlice = require("@reduxjs/toolkit").createSlice;

//initial state
const initialState = {
  numofCakes: 10,
};

//Reducer
const cakeSlice = createSlice({
  name: "Cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofCakes--;
    },
    restocked: (state, action) => {
      state.numofCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
