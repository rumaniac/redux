const configureSTore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
//step6 :import reducer in store.js
const icecreamReducer = require("../features/icecream/icecreamSlice");

//create a store and attach the reducer

const store = configureSTore({
  reducer: {
    cake: cakeReducer,
    //step7  set icream reducer to a key in store
    iceream: icecreamReducer,
  },
});

//step 8
module.exports = store;
