//step 1
const createSlice = require("@reduxjs/toolkit").createSlice;

//step 3
const initialState = {
  numOfIcecream: 20,
};

//step 2
const icecreamSlice = createSlice({
  name: "icecream",
  //add the initial state function
  initialState,

  //step4 - reducers
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
});

//step5
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
