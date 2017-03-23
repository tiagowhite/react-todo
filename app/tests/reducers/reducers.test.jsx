var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducers', () => {
    it('Should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducers(df('dog'), df('action'));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducers', () => {
    it('Should toggle showCompleted satus', () => {
      var action = {
        type: 'TOOGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducers(df(false), df(action));

      expect(res).toEqual(false);
    });
  });

  describe('todoReducers', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Marcar remedio novamente'
      };
      var res = reducers.todoReducers(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })

    it('Should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Jubirula brasil bolsominion',
        completed: true,
        createdAt: 122,
        completedAt: 123
      }]

      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todoReducers(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);






    })
  })
});
