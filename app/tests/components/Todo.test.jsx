const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');


describe('Todo', () => {
	it('Should exists', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id on click', () => {
		var todoData = {
			id: 191,
			text: 'Marcar retirada de remedio riofarmes',
			completed: true
		};

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(191);

	});


});
