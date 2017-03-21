var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')

describe('Reducers', () => {
	describe('searchTextReducers', () => {
		it('Should set search text', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}
			var res = reducers.searchTextReducers(df('dog'), df('action'));

			expect(res).toEqual(action.searchText);
		})
	})

	describe('showCompletedReducers', () => {
		it('Should toggle showCompleted satus', () => {
			var action = {
				type: 'TOOGLE_SHOW_COMPLETED'
			}
			var res = reducers.showCompletedReducers(df(false), df(action));

			expect(res).toEqual(false);
		})
	});

})
