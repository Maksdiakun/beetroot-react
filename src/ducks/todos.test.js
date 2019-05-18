import reducer, { defaultState, changeNewItemText, deleteItem } from "./todos.js";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
describe('changeNewItemText',() => {
   it("works", () => {
       const nextState = reducer(defaultState, changeNewItemText('some notes'));
    expect(nextState).toEqual({
           ...defaultState,
           newItemText:'some notes'
       });
   });
});
describe("deleteItem", () => {
    it("works", async () => {
      const stateWithItem = {
        ...defaultState,
        items: [
          {
            id: 1,
            text: "buy milk",
            isDone: true
          },
          {
            id: 2,
            text: "go home",
            isDone: false
          }
        ]
      };
  
      const api = {
        todos: {
          deleteItem: () => Promise.resolve()
        }
      };
  
      const store = createStore(
        reducer,
        stateWithItem,
        applyMiddleware(ReduxThunk.withExtraArgument({ api }))
      );
  
      await store.dispatch(deleteItem(1));
  
      const nextState = store.getState();
  
      expect(nextState).toEqual({
        ...defaultState,
        items: [
          {
            id: 2,
            text: "go home",
            isDone: false
          }
        ]
      });
    });
  });