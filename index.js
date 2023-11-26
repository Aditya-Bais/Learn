const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
console.log("Initial State", store.getState());

const fetchUsers = require("./features/user/userSlice").fetchUsers;
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(3));
// store.dispatch(cakeActions.restocked(10));

// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.ordered(3));
// store.dispatch(icecreamActions.restocked(10));

// unsubscribe();
