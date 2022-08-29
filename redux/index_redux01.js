//Reducer Async action - to call an API

const redux = require("redux");
const createStore = redux.createStore;
//STEP 1
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

// initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// ACTION
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED ";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//ACTION CREATOR
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSucess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//REDUCER FUNCTION

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        leading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        leading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        leading: false,
        users: [],
        error: action.payload,
      };
  }
};

//STEP 3
//ASYNC ACTION CREATOR
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSucess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

//STEP 2
//REDUX STORE
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//SUBSCRIBE TO STORE
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
