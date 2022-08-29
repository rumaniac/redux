const store = require("./app/store");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
//step 9 import the actions and do a dispatch
const icecreamAction =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State", store.getState());

//step10
const unSubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

//step 11
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.restocked(2));

unSubscribe();
