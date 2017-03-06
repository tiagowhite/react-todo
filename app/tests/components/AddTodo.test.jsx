const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');


describe('AddTodo', () => {
	it('Should exists', () => {
		expect(AddTodo).toExist();
	});

	it('should call on AddTodo prop with valid data', () => {
		var todoText = "Check Mail"
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;

		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);

	});
	it('should call on AddTodo prop when invalid input', () => {
		var todoText = ""
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;

		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled(todoText);

	});

});
